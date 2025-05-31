import cv2
import mediapipe as mp
import numpy as np
import requests

def calculate_angle(a, b, c):
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

cap = cv2.VideoCapture(0)

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        
        results = pose.process(image)
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        
        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark
            
            hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, 
                   landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
            knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, 
                    landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
            ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, 
                     landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
            
            angle = calculate_angle(hip, knee, ankle)
            
            cv2.putText(image, f'Knee Angle: {int(angle)}°', 
                        (50, 50), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
            
            if angle > 120:
                feedback = "Stand Straight (160° - 180°)\n- Keep knees slightly bent.\n- Engage core.\n- Lower yourself slowly."
            elif 130 <= angle <= 120:
                feedback = "Go Lower (130° - 160°)\n- Push hips back.\n- Lower thighs parallel to floor.\n- Maintain a straight spine."
            elif 90 <= angle <= 100:
                feedback = "Good Squat (90° - 130°)\n- Knees aligned with toes.\n- Keep weight on heels.\n- Maintain neutral spine."
            elif angle < 90:
                feedback = "Too Low (Below 90°)\n- Avoid excessive knee stress.\n- Keep knees stable.\n- Only go deep if mobility allows."
            else:
                feedback = "Adjust Position\n- Check form.\n- Keep spine neutral.\n- Balance weight evenly."

            # 🔥 Send data to Node.js squat server
            try:
                requests.post("http://localhost:5001/pose", json={
                    "angle": int(angle),
                    "feedback": feedback
                })
            except:
                print("⚠️ Node.js squat server not running.")

            # Display feedback
            y_offset = 100
            for i, line in enumerate(feedback.split("\n")):
                cv2.putText(image, line, (50, y_offset + i * 30), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2, cv2.LINE_AA)
            
            mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)
        
        cv2.imshow('Squat Detection', image)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import cv2
# import mediapipe as mp
# import numpy as np
# import base64

# def calculate_angle(a, b, c):
#     a = np.array(a)
#     b = np.array(b)
#     c = np.array(c)
    
#     radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
#     angle = np.abs(radians * 180.0 / np.pi)
#     if angle > 180.0:
#         angle = 360 - angle
#     return angle

# mp_pose = mp.solutions.pose

# app = Flask(__name__)
# CORS(app) 

# @app.route('/pose', methods=['POST'])
# def detect_pose():
#     # Decode the base64 image
#     data = request.json
#     image_data = base64.b64decode(data['image'].split(',')[1])
#     np_image = np.frombuffer(image_data, np.uint8)
#     frame = cv2.imdecode(np_image, cv2.IMREAD_COLOR)

#     # Process with Mediapipe
#     with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
#         results = pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
#         if results.pose_landmarks:
#             landmarks = results.pose_landmarks.landmark
            
#             hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, 
#                    landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
#             knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, 
#                     landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
#             ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, 
#                      landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
            
#             angle = calculate_angle(hip, knee, ankle)
            
#             feedback = "Good squat" if 90 <= angle <= 130 else "Adjust your form"
            
#             return jsonify({"angle": angle, "feedback": feedback})

#     return jsonify({"angle": 0, "feedback": "No pose detected"})

# if __name__ == "__main__":
#     app.run(debug=True)