import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {
  const transition= {type:'spring', duration: 3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'9px'}}
                transition={{...transition, type:'tween'}}
                />
                  
                
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero heading */}

            <div className="hero-text">
              <div>
                <span className='stroke-text'>Space</span>
              <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
                </div>
                <div >
                  <span>In here we will help you to shape your ideal body and live up
                     your life to fullest</span>
                  
                </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span><NumberCounter end={140} start={0} delay="4" preFix="+"/></span>
                <span>expert coaches</span>
                </div>
                <div>
                <span><NumberCounter end={200} start={0} delay="4" preFix="+"/></span>
                <span>members joined</span>
                </div>
                <div>
                <span><NumberCounter end={150} start={0} delay="2" preFix="+"/></span>
                <span>fitness Programs</span>
                </div>
            </div>

            {/* hero-buttons */}

            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>

          <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
           className="heart-rate">
            <img src={Heart} alt="" srcset="" />
            <span>Heart Rate</span>
            <span> 116 bpm</span>
          </motion.div>

          {/* hero-images */}

          <img src={hero_image} alt="" srcset="" className='hero-image'/>
          <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition}
          
          src={hero_image_back} alt="" srcset="" className='hero-image-back' />

          {/* colories */}
          <div className="colories">
            <img src={Calories} alt="" srcset="" />
            <div>
            <span>Colories Burned</span>
            <span>220 kcal</span>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Hero