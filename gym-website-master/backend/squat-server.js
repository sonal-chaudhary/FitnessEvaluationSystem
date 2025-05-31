const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for React
app.use(bodyParser.json()); // Parse JSON data

// Store squat data
let squatData = {
  angle: 0,
  feedback: "Waiting for squat data..."
};

// Handle POST requests (Python sends squat data here)
app.post('/pose', (req, res) => {
  const { angle, feedback } = req.body;
  console.log("✅ Received from Python:");
  console.log("Angle:", angle);
  console.log("Feedback:", feedback);

  // Update squat data
  squatData.angle = angle;
  squatData.feedback = feedback;

  res.sendStatus(200);
});

// Handle GET requests (React fetches squat data here)
app.get('/', (req, res) => {
    res.send("Welcome to the Squat Server! Use /pose for squat data.");
  });

app.listen(5001, () => {
  console.log('🔥 Squat server running at http://localhost:5001');
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Store squat data
// let squatData = {
//   angle: 0,
//   feedback: "Waiting for squat data...",
// };

// // Handle POST requests (Python sends squat data here)
// app.post("/pose", (req, res) => {
//   const { angle, feedback } = req.body;
//   console.log("✅ Received from Python:");
//   console.log("Angle:", angle);
//   console.log("Feedback:", feedback);

//   // Update squat data
//   squatData.angle = angle;
//   squatData.feedback = feedback;

//   res.sendStatus(200);
// });

// // Handle GET requests (React fetches squat data here)
// app.get('/', (req, res) => {
//   res.send("Welcome to the Squat Server! Use /pose for squat data.");
// });

// app.listen(5001, () => {
//   console.log("🔥 Squat server running at http://localhost:5001");
// });