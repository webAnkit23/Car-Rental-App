import React from 'react'
import './AboutCompany.css'
import mainphoto from './AboutImages/mainphoto.jpg'
import one from './AboutImages/one.png'
import two from './AboutImages/two.png'
import three from './AboutImages/three.png'


export default function AboutCompany() {
  return (
    <section className='About_company_section'>
        <div className="About_container">
                  <div className="about_image_container">
            <img className='About_img' src={mainphoto}></img>
            </div>
            <div className="about_text_area">
                <h4>About Company</h4>
                <h1>You start the engine and your adventure begins</h1>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                <div className="text_images_container">
                    <div className="inner_image_container">
                        <img src={one}></img>
                        <p><span>20</span> Car Types</p>
                    </div>
                    <div className="inner_image_container">
                        <img src={two}></img>
                        <p><span>85</span> Rental Outlets</p>
                    </div>
                    <div className="inner_image_container">
                        <img src={three}></img>
                        <p><span>75</span> Repair Shops</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
