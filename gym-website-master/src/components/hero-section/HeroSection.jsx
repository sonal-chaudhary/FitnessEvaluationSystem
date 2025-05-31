// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // ✅ added useNavigate
// import Header from '../header/Header';
// import hero_image from '../../assets/hero_image.png';
// import hero_image_back from '../../assets/hero_image_back.png';
// import Heart from '../../assets/heart.png';
// import Calories from '../../assets/calories.png';
// import NumberCounter from 'number-counter';
// import './HeroSection.css';

// import { motion } from 'framer-motion';

// const HeroSection = () => {
//     const transition = { type: 'spring', duration: 3 };
//     const mobile = window.innerWidth <= 768;
//     const navigate = useNavigate(); // ✅ navigation hook

//     return (
//         <div className="hero" id="home">
//             <div className="blur hero-blur"></div>

//             <div className="left-h">
//                 <Header />
//                 <div className="the-best-ad">
//                     <motion.div
//                         initial={{ left: mobile ? "165px" : "238px" }}
//                         whileInView={{ left: '8px' }}
//                         transition={{ ...transition, type: "tween" }}
//                     ></motion.div>
//                     <span>Train Smarter. Push Harder. Rise Stronger</span>
//                 </div>

//                 <div className="hero-text">
//                     <div>
//                         <span className="stroke-text">Transform </span>
//                         <span>Your</span>
//                     </div>
//                     <div>
//                         <span>Best Self</span>
//                     </div>
//                     <div>
//                         <span>
//                             Join PulseUp and unleash the strongest version of you with personalized AI
//                             coaching, custom workouts, diet chart and non-stop motivation.
//                         </span>
//                     </div>
//                 </div>

//                 <div className="figures">
//                     <div>
//                         <span>
//                             <NumberCounter end={140} start={69} delay="3" preFix="+" />
//                         </span>
//                         <span>expert coaches </span>
//                     </div>
//                     <div>
//                         <span>
//                             <NumberCounter end={978} start={779} delay="3" preFix="+" />
//                         </span>
//                         <span> Happy members</span>
//                     </div>
//                     <div>
//                         <span>
//                             <NumberCounter end={50} start={10} delay="3" preFix="+" />
//                         </span>
//                         <span>fitness programs</span>
//                     </div>
//                 </div>

//                 <div className="hero-buttons">
//                     <Link to="/survey" className="btn">Get Started</Link>
//                     <Link to="/dashboard" className="btn">Explore Now</Link>
//                 </div>
//             </div>

//             <div className="right-h">
//                 <button className="btn" onClick={() => navigate('/signup')}>Join Now</button> {/* ✅ updated */}

//                 <motion.div
//                     initial={{ right: "-1rem" }}
//                     whileInView={{ right: "4rem" }}
//                     transition={transition}
//                     className="heart-rate"
//                 >
//                     <img src={Heart} alt="" />
//                     <span>Heart Rate</span>
//                     <span>116 bpm</span>
//                 </motion.div>

//                 <img src={hero_image} alt="" className="hero-image" />

//                 <motion.img
//                     initial={{ right: '11rem' }}
//                     whileInView={{ right: "28rem" }}
//                     transition={transition}
//                     src={hero_image_back}
//                     alt=""
//                     className="hero-image-back"
//                 />

//                 <motion.div
//                     initial={{ right: "37rem" }}
//                     whileInView={{ right: "28rem" }}
//                     transition={transition}
//                     className="calories"
//                 >
//                     <img src={Calories} alt="" />
//                     <div>
//                         <span>Calories Burned</span>
//                         <span>220 kcal</span>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import './HeroSection.css';

import { motion } from 'framer-motion';

const HeroSection = () => {
    const transition = { type: 'easeOut', duration: 2.5 };
    const isMobile = window.innerWidth <= 768;
    const navigate = useNavigate();

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>

            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: isMobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>Train Smarter. Push Harder. Rise Stronger</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Transform </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Best Self</span>
                    </div>
                    <div>
                        <span>
                            Join PulseUp and unleash the strongest version of you with personalized AI
                            coaching, custom workouts, diet chart and non-stop motivation.
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={69} delay="3" preFix="+" />
                        </span>
                        <span>expert coaches </span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={779} delay="3" preFix="+" />
                        </span>
                        <span> Happy members</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={10} delay="3" preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <Link to="/survey" className="btn">Get Started</Link>
                    <Link to="/dashboard" className="btn">Explore Now</Link>
                </div>
            </div>

            <div className="right-h">
                <button className="btn" onClick={() => navigate('/signup')}>Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <motion.img
                    initial={{ right: isMobile ? '5rem' : '15rem' }}
                    whileInView={{ right: isMobile ? '15rem' : '28rem' }}
                    transition={transition}
                    src={hero_image}
                    alt="Hero"
                    className="hero-image"
                />

                <motion.img
                    initial={{ right: isMobile ? '20rem' : '35rem' }}
                    whileInView={{ right: isMobile ? '10rem' : '25rem' }}
                    transition={transition}
                    src={hero_image_back}
                    alt="Hero Back"
                    className="hero-image-back"
                />

                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;

