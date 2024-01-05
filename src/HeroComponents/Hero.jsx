import React from 'react'
import './Hero.css'
export default function Hero({title}) {
  return (
   <div className="hero_section">
    <div className="hero_container">
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
