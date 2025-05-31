import React from 'react';
import './Survey.css';

const Survey = () => {
  return (
    <div className="survey-container">
      <h1 className="survey-heading"> Personal Health Survey</h1>
      <form className="survey-form">
        <label>
          Gender:
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Weight (kg): <input type="number" />
        </label>
        <label>
          Height (cm): <input type="number" />
        </label>
        <label>
          Health Concerns:
          <textarea rows="3" placeholder="e.g., back pain, asthma, etc." />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;