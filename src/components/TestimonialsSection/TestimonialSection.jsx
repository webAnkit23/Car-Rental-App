import React from 'react'
import './Testimonials.css'
function TestimonialSection() {
  return (
    <section className='testimonials_section'>
        <div className="testimonials_container">
            <div className="testi_inner_container">
                <div className="testi_headings">
                    <h5>Reviewed by People</h5>
                    <h1>Client's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
                <div className="clients_reviews">
                    <div className="client_card"> 
                        <h4>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h4>
                         <div className="client_info">
                            <div className="img_container">
                            <img src='src\components\TestimonialsSection\clientsTestimonialsImages\harrypotter.jpg'></img>
                            </div>
                            <p>Ankit Singh<br />Belgrade</p>
                            <span>99</span>
                         </div>
                    </div>
                    <div className="client_card">
                        <h4>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h4>
                        <div className="client_info">
                            <div className="img_container">
                         <img src='src\components\TestimonialsSection\clientsTestimonialsImages\ron.jpg'></img> 
                         </div>
                            <p>Altamash Alam<br />Gorakhpur</p>
                            <span>99</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection