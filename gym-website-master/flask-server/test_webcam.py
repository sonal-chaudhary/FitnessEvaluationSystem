import cv2

cap = cv2.VideoCapture(0)
print("Webcam accessible:", cap.isOpened())

if cap.isOpened():
    ret, frame = cap.read()
    if ret:
        cv2.imshow("Test Frame", frame)
        cv2.waitKey(0)
    else:
        print("Failed to capture frame.")
else:
    print("❌ Webcam not accessible.")

cap.release()
cv2.destroyAllWindows()