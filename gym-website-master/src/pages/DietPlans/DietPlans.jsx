import React, { useState } from 'react';
import './DietPlans.css';
import MuscleGain from '../../assets/muscleGain.jpeg';
import HighProtein from '../../assets/HighProtein.jpeg';
import BalancedDiet from '../../assets/balancedDiet.jpeg';
import DetoxMeal from '../../assets/DetoxMeal.jpeg';
import FatLoss from '../../assets/fatLoss.jpeg';
import Intermittent from '../../assets/intermittentPlan.jpeg';
import Keto from '../../assets/ketoDiet.jpeg';
import Vegan from '../../assets/veganMeal.jpeg';
import SevenDay from '../../assets/7day.jpeg'; // the 9th image

const diets = [
  { name: 'Muscle Gain', image: MuscleGain },
  { name: 'High Protein', image: HighProtein },
  { name: 'Balanced Diet', image: BalancedDiet },
  { name: 'Detox Meal', image: DetoxMeal },
  { name: 'Fat Loss', image: FatLoss },
  { name: 'Intermittent Plan', image: Intermittent },
  { name: 'Keto Diet', image: Keto },
  { name: 'Vegan Meal', image: Vegan },
  { name: '7 Day Plan', image: SevenDay },
];

const DietPlans = () => {
  const [popupImage, setPopupImage] = useState(null);

  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="dietplans-container">
      <h1 className="dietplans-heading">Your Diet Plans</h1>
      <div className="dietplans-grid">
        {diets.map((diet, index) => (
          <div key={index} className="diet-card">
            <img
              src={diet.image}
              alt={diet.name}
              onClick={() => handleImageClick(diet.image)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{diet.name}</h3>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-image-wrapper">
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DietPlans;
