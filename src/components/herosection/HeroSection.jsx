import React from 'react'
import './heroSection.css'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import background from './imagesHeroSection/HeroBackgroud.png'
import heroCar from './imagesHeroSection/HeroCar.png'
export default function HeroSection() 
{
  return (
    <div className='hero2_container'>
       <div className="wrapper">
        <img className='hero_background_img' src={background}></img>
        <div className="hero_section">
           <div className="hero_content_text">
               <h4 className='hero_text_h4'>Plan your trip now</h4>
               <h1 className='hero_text_h1'>Save <span>big </span>with our car rental</h1>
               <p className='hero_text_p1'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
               <div className="hero_button_container">
                <button className='hero_button'><a>Book Ride  <FaCheckCircle /></a></button>
                <button className='hero_button hero_button_black'><a>Learn more   <FaChevronCircleRight /></a></button>
               </div> 
           </div>
            <img className ='hero_car_image'  src={heroCar}></img>
        </div>
       </div>
    </div>
  )
}
