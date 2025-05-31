import cv2
import mediapipe as mp

# Setup MediaPipe Pose
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils

# Initialize webcam
cap = cv2.VideoCapture(0)
print("Webcam accessible:", cap.isOpened())

if not cap.isOpened():
    print("❌ Webcam not accessible.")
else:
    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        print("✅ Starting pose detection...")
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                print("❌ Failed to capture frame.")
                break

            # Convert the frame to RGB (required by MediaPipe)
            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False

            # Process the frame for pose detection
            results = pose.process(image)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Draw pose landmarks on the frame
            if results.pose_landmarks:
                print("Pose landmarks detected!")
                mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

            # Display the frame
            cv2.imshow('Pose Detection', image)

            # Exit the loop when 'q' is pressed or after a set time (optional)
            if cv2.waitKey(10) & 0xFF == ord('q'):
                print("Exiting pose detection...")
                break
        
        cap.release()
        cv2.destroyAllWindows()