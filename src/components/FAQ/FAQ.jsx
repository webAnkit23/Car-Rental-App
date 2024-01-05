import React, { useState } from 'react'
import './FAQ.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import faqcar from './FAQimages/faq_car.png'
export default function FAQ() {
  let [selected,setselected] = useState(null);

  let handleclick = (index) =>{
     
        if(selected===index){
            return setselected(null);
        }
     
      return setselected(index);
  }
    let faqData =[{
      question: "What is special about comparing rental car deals?",
      answer :"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    },
    {
        question:' How do I find the car rental deals?',
        answer :'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'

       },
       {
          question :'How do I find such low rental car prices?',
          answer:'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
       }];
  return (
    <div className="faq_section" style={{backgroundImage : `url(${faqcar})`}}>
        <div className="faq_container">
            <div className="faq_contents">
                <div className="faq_headings">
                    <h5>FAQ</h5>
                    <h1>Frequently Asked Questions</h1>
                    <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                </div>

                <div className="faq_accordion_container">
                    <div className="faq_accordion">
                           {faqData.map((item ,index) =>{
                            return <div key={index} className={`question_block `} onClick={() => handleclick(index)}>
                                     <div className= {`question ${selected===index ? 'active_question':''}`}> {`${index+1} . ${item.question}`}
                                     <span>{selected===index? <IoIosArrowDropup />:<IoIosArrowDropdown />}</span>
                                     </div>
                                     <div className={`answer  ${selected===index ? 'visible' :'hide'}`}>
                                        <p className={` faq_p ${selected===index ? 'visible' :'hide'}`} >{item.answer}</p>
                                     </div>
                            </div> 

                            
                           })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
