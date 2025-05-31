import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const pages = [
    { name: 'Workouts', path: '/workouts' },
    { name: 'Guides', path: '/guides' },
    { name: 'Diet Plans', path: '/dietplans' },
    { name: 'Health/Fit Check', path: '/healthcheck' },
  ];

  return (
    <div className="dashboard-container">

      <h1>Welcome to Your Dashboard</h1>
      <p>Track your progress and goals here.</p>

      <div className="dashboard-cards">
        {pages.map((page, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => navigate(page.path)}
          >
            {page.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

