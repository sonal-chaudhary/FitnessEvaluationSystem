import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
import Dashboard from './pages/Dashboard/Dashboard';
import Survey from './pages/Survey/Survey';
import Workout from './pages/Workout/Workout';
import DietPlans from './pages/DietPlans/DietPlans';
import Signup from './pages/Signup/Signup';
import Guide from './pages/Guide/Guide';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Programs />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join />
              <Footer />
            </>
          }
        />
        <Route path="/survey" element={<Survey />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/workouts" element={<Workout />} />
        <Route path="/dietplans" element={<DietPlans />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;