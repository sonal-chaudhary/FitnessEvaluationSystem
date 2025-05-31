// import React from 'react';
// import {programsData} from '../../data/programsData';
// import RightArrow from '../../assets/rightArrow.png';

// import './Programs.css';

// const Programs = () => {
//   return (
//     <div className="Programs" id="programs">
//         <div className="programs-header">
//             <span className="stroke-text">Explore our</span>
//             <span>Programs</span>
//             <span className="stroke-text">to shape you</span>
//         </div>
//         <div className="program-categories">
//             {programsData.map((program) => (
//                 <div className="category">
//                     {program.image}
//                     <span>{program.heading}</span>
//                     <span>{program.details}</span>
//                     <div className="join-now"><span>Explore Now</span><img src={RightArrow} alt=""/></div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Programs;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 import for navigation
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

import './Programs.css';

const Programs = () => {
  const navigate = useNavigate(); // 👈 navigation hook

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div
              className="join-now"
              onClick={() => navigate('/dashboard')}
              style={{ cursor: 'pointer' }}
            >
              <span>Explore Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
