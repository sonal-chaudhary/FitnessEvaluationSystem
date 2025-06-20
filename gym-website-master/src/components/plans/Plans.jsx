// import React from 'react'
// import {plansData} from '../../data/plansData'
// import whiteTick from '../../assets/whiteTick.png'
// import './Plans.css'
// import { useNavigate } from 'react-router-dom'

// const Plans = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="plans-container">
//         <div className="blur plans-blur-1"></div>
//         <div className="blur plans-blur-2"></div>
//         <div 
//             className="programs-header"
//             style={{gap: '2rem'}}
//         >
//             <span className="stroke-text">READY TO START</span>
//             <span>YOUR JOURNEY</span>
//             <span className="stroke-text">NOW WITH US</span>   
//         </div>
//         <div className="plans">
//             {plansData.map((plan, i) => (
//                 <div className="plan" key={i}>
//                     {plan.icon}
//                     <span>{plan.name}</span>
//                     <span>$ {plan.price}</span>

//                     <div className="features">
//                     {plan.features.map((feature, i) => (
//                         <div className="feature">
//                             <img src={whiteTick} alt="" />
//                             <span key={i}>{feature}</span>
//                         </div>
//                     ))}
//                     </div>     
//                     <div>
//                         <span>See more benefits -</span>
//                     </div>    
//                     <button className="btn">Explore Now</button>
//                 </div>  
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Plans
import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
import { useNavigate } from 'react-router-dom' // 👈 import this

const Plans = () => {
  const navigate = useNavigate(); // 👈 initialize navigation

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -</span>
            </div>

            {/* 👇 Navigate to Dashboard on click */}
            <button className="btn" onClick={() => navigate('/dashboard')}>
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans

