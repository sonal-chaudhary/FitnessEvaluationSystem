import cv2
import mediapipe as mp
import numpy as np

# Setup mediapipe and OpenCV
mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

# Initialize video capture (camera)
cap = cv2.VideoCapture(0)

def calculate_angle(a, b, c):
    a = np.array(a)  # First point
    b = np.array(b)  # Mid point (joint)
    c = np.array(c)  # End point
    
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    
    if angle > 180.0:
        angle = 360 - angle
        
    return angle

def process_video_pose():
    print("Camera opened successfully")
    
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
                
                # Extract key joint coordinates
                hip = [landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x, 
                       landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y]
                knee = [landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x, 
                        landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y]
                ankle = [landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x, 
                         landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y]
                
                # Calculate knee angle
                angle = calculate_angle(hip, knee, ankle)
                
                # Display knee angle on screen
                cv2.putText(image, f'Knee Angle: {int(angle)}°', 
                            (50, 50), 
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
                
                # Display feedback based on squat depth
                if angle > 120:
                    feedback = "Stand Straight (160° - 180°)"
                elif 130 <= angle <= 120:
                    feedback = "Go Lower (130° - 160°)"
                elif 90 <= angle <= 100:
                    feedback = "Good Squat (90° - 130°)"
                elif angle < 90:
                    feedback = "Too Low (Below 90°)"
                else:
                    feedback = "Adjust Position"
                
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

def process_image_pose(image):
    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        # Convert the image to RGB
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False

        # Process the image to extract pose landmarks
        results = pose.process(image)
        
        if results.pose_landmarks:
            # Extract landmarks and feedback logic
            landmarks = []
            for lm in results.pose_landmarks.landmark:
                landmarks.append({
                    "x": lm.x,
                    "y": lm.y,
                    "z": lm.z,
                    "visibility": lm.visibility
                })
            
            feedback = "Pose detected successfully"
            return landmarks, feedback
        else:
            return None, "No pose detected"
import cv2

cap = cv2.VideoCapture(0)
print("Webcam accessible:", cap.isOpened())
cap.release()