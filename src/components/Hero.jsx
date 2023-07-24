import React from 'react';
import {motion} from "framer-motion";
import profile from "../assets/profile.png";
import share from "../assets/share.png";
import "./Hero.css";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='hero--container'>    
      <img src={profile} alt="Profile" className='hero--profile' />
      <div className="hero--content">
        <h1 className='hero--tagline'>Hi ...This is Rishabh Singh. </h1>
        <p className='hero--description'>As a visionary programmer and web developer, I'm committed to transforming creative concepts into cutting-edge web experiences.</p>
        <div className="hero--buttons">
          <button className='hero--resume'>Resume</button>
          <img src={share} alt="Share" className='share' /> 
          <h3 className='hero--contact'><Link to="/contact">Contact</Link></h3>
        </div>
      </div>
    </div>
  );
}

