import React from 'react'
import './Hero.css'
import bg2 from './HeroImages/bg2.png'
export default function Hero({title}) {
  return (
   <div className="hero_section">
    <div className="hero_container" style={{backgroundImage : `url(${bg2})`}}>
      <div className="hero_background"></div>
    <div className="hero-pages__overlay"></div>
         <div className="hero2_text_container">
          <h2>{title}</h2>
          <p><a>Home</a> / {title}</p>
         </div>
    </div>
   </div>
  )
}
