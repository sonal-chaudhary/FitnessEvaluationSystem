from flask import Flask, jsonify
from threading import Thread
import pose_algo  # Import your pose detection logic here

app = Flask(__name__)

@app.route('/pose/video', methods=['GET'])
def video_pose_detection():
    def run_pose():
        result = pose_algo.process_video_pose()
        print(result)

    thread = Thread(target=run_pose)
    thread.start()
    return jsonify({"message": "Pose detection started. Check the webcam window and press 'q' to exit."})

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(port=5000, debug=False)