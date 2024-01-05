import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className='footer_section'>
        <div className="footer_container">
            <div className="footer_content_container">
                <div className=" footer_content footer_contact">
                    <h2> <span>CAR</span> Rental</h2>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <div className="footer_number">   (123) -456-789</div>
                    <div className="footer_email">www.ankitsingh2323@gmail.com</div>
                    <p className='p'>Design by XpeedStudio</p>
                </div>
                <div className=" footer_content footer_company">
                    <h2>company</h2>
                    <p>New York</p>
                    <p>Carrer</p>
                    <p>Mobile</p>
                    <p>How we Work</p>
                    <p>Blog</p>
                </div>
                <div className="footer_content footer_working">
                    <h2>Working Hours</h2>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                    
                </div>
                <div className="footer_content footer_subscription">
                    <h2>SUBSCRIPTION</h2>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    <input type='text' placeholder='Enter Email Address'></input>
                    <button className='footer_button'>Submit</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer