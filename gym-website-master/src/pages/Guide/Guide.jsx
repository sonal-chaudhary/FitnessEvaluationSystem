import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Guide.css";

const Guide = () => {
  const [angle, setAngle] = useState(0);
  const [feedback, setFeedback] = useState("Waiting for squat data...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:5001/pose")
        .then((res) => {
          setAngle(res.data.angle);
          setFeedback(res.data.feedback);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching squat data", err);
          setIsLoading(false);
        });
    }, 1000); // fetch every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="guide-container">
      <h1>Live Squat Feedback</h1>
      {isLoading ? (
        <p>Loading squat data...</p>
      ) : (
        <>
          <h2>Knee Angle: {angle}°</h2>
          <div className="feedback-box">
            {feedback.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Guide;
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Webcam from "react-webcam";
// import "./Guide.css";

// const Guide = () => {
//   const [angle, setAngle] = useState(0);
//   const [feedback, setFeedback] = useState("Waiting for squat data...");
//   const [isLoading, setIsLoading] = useState(true);
//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Capture the current video frame from the webcam as a base64 image
//       const imageSrc = webcamRef.current?.getScreenshot();
//       console.log("📷 Screenshot captured:", imageSrc?.substring(0, 50)); // just the start of the string

//       if (imageSrc) {
//         axios
//           .post("http://localhost:5000/pose", { image: imageSrc })
//           .then((res) => {
//             setAngle(res.data.angle);
//             setFeedback(res.data.feedback);
//             setIsLoading(false);
//           })
//           .catch((err) => {
//             console.error("Error fetching squat data", err);
//             setIsLoading(false);
//           });
//       }
//     }, 1000); // Fetch squat data every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="guide-container">
//       <h1>Live Squat Feedback</h1>

//       {/* Live Webcam Feed */}
//       <Webcam
//        ref={webcamRef}
//       screenshotFormat="image/jpeg"
//       videoConstraints={{ facingMode: "user" }}
//       className="webcam-feed"
//       />


//       {isLoading ? (
//         <p>Loading squat data...</p>
//       ) : (
//         <>
//           <h2>Knee Angle: {angle}°</h2>
//           <div className="feedback-box">
//             {feedback.split("\n").map((line, idx) => (
//               <p key={idx}>{line}</p>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Guide;