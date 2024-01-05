import React from 'react'
import './ChooseSection.css'
import { IoIosArrowForward } from "react-icons/io";
import choosebanner from './images_Choose/choose_car_banner.png'
import choosebackground from './images_Choose/choose_background.png'
import dollar from './images_Choose/text dollar.png'
import textarea from './images_Choose/text_area1.png'
import money from './images_Choose/text_money.png'
function ChooseSection() {
  return (
    <section className='choose_section'>
        <div className="choose_container" style={{backgroundImage : `url(${choosebackground})`}}>
            <div className="choose_inner_container">
                <img src={choosebanner}></img>
                <div className="choose_text_area">
                    <div className="left_text">
                        <h4>Why Choose Us</h4>
                        <h1>Best valued deals you will ever find </h1>
                        <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                        <button><IoIosArrowForward /></button>
                    </div>
                    <div className="right_text">
                          <div className="right_text_block">
                            <img src={textarea}></img>
                            <div className="right_text_container">
                            <h4>Cross Country Drive</h4>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>  
                            </div>
                          </div>
                          <div className="right_text_block">
                            <img src={dollar}></img>
                            <div className="right_text_container">
                            <h4>All Inclusive Pricing</h4>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>  
                            </div>
                          </div>
                          <div className="right_text_block">
                            <img src={money}></img>
                            <div className="right_text_container">
                            <h4>No Hidden Charges</h4>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>  
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ChooseSection