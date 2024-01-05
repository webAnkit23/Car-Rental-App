import React from 'react'
import './PlanSection.css'
function PlanSection() {
  return (
    <section className="plan_container">
        <div className="plan_inner_container">
            <div className="plan_area">
                <div className="plan_heading">
                    <h3>Plan your trip now</h3>
                    <h1>Quick & easy rental</h1>
                </div>
                <div className="plan_procedure">
                    <div className="procedure_box step1_select_car">
                        <img src='src\components\PlanSection\imagesPlanSection\select_car.png'></img>
                        <h2>Select car</h2>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className="procedure_box step2_contact">
                        <img src='src\components\PlanSection\imagesPlanSection\contact_person.png'></img>
                        <h2>Contact person</h2>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className="procedure_box step3_drive">
                        <img src='src\components\PlanSection\imagesPlanSection\lets_drive.png'></img>
                                
                        <h2>Let's Drive</h2>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
    
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default PlanSection