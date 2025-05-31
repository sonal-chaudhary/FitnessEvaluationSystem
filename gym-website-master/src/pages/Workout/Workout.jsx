import React, { useState } from 'react';
import './Workouts.css';
import Squats from '../../assets/Squats.jpeg';
import Deadlift from '../../assets/Deadlift.jpeg';
import RDL from '../../assets/RDL.jpeg';
import Benchpress from '../../assets/Benchpress.jpeg';
import Biceps from '../../assets/Biceps.jpeg';
import LateralRaises from '../../assets/lateralRaises.jpeg';
import Pullups from '../../assets/pullups.jpg';
import Pushups from '../../assets/pushups.jpg';

const workouts = [
  {
    name: 'Squats',
    image: Squats,
    difficulty: 'Intermediate',
    description: 'Strengthens glutes, quads, and core. Keep your back straight and go deep!',
  },
  {
    name: 'Deadlift',
    image: Deadlift,
    difficulty: 'Advanced',
    description: 'Targets hamstrings, glutes, and back. Lift with your legs, not your spine!',
  },
  {
    name: 'RDL',
    image: RDL,
    difficulty: 'Intermediate',
    description: 'Romanian Deadlifts hit the hamstrings and glutes. Keep knees soft, back neutral.',
  },
  {
    name: 'Benchpress',
    image: Benchpress,
    difficulty: 'Intermediate',
    description: 'Great for chest, triceps, and shoulders. Keep elbows at 45°!',
  },
  {
    name: 'Biceps Curl',
    image: Biceps,
    difficulty: 'Beginner',
    description: 'Targets biceps. Keep elbows tucked and squeeze at the top.',
  },
  {
    name: 'Lateral Raises',
    image: LateralRaises,
    difficulty: 'Beginner',
    description: 'Great for shoulder width. Don’t go above shoulder level!',
  },
  {
    name: 'Pull-ups',
    image: Pullups,
    difficulty: 'Advanced',
    description: 'Back and biceps killer. Full range of motion, no swinging.',
  },
  {
    name: 'Push-ups',
    image: Pushups,
    difficulty: 'Beginner',
    description: 'Full upper body. Keep your core tight and elbows back!',
  },
];

const Workout = () => {
  const [expanded, setExpanded] = useState(Array(workouts.length).fill(false));

  const toggleDescription = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="workouts-container">
      <h1 className="workouts-heading">Your Workout Routines</h1>

      {workouts.map((workout, index) => (
        <div className="workout-box" key={index}>
          <img src={workout.image} alt={workout.name} />
          <h3>{workout.name}</h3>
          <p className="difficulty">Level: {workout.difficulty}</p>
          <button className="arrow-button" onClick={() => toggleDescription(index)}>
            ➤
          </button>
          {expanded[index] && (
            <p className="description">{workout.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Workout;


