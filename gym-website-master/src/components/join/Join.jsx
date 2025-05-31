import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './Join.css';

const Join = () => {
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <div className="email-container">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        required 
                    />
                    <Link to="/signup" className="btn btn-j">Join Now</Link> {/* ✅ FIXED BUTTON */}
                </div>
            </div>
        </div>
    );
};

export default Join;

