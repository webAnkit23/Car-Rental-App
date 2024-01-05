import React from 'react'
import ContactForm from './ContactForm'
import './ContactBox.css'
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
export default function ContactBox() {
  return (
    <div className="contact_container">
        <div className="contact_div">
            <div className="contact_text_box">
                <h1>Need additional <br />information?</h1>
                <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
              <a className='a'> <FiPhoneCall />     {`  (123) 456 789`}</a>
              <a className='a'> <FiMail />  www.ankitsingh2323@gmail.com</a>
              <a className='a'> <IoPaperPlaneOutline></IoPaperPlaneOutline>  Belgrade , Serbia</a>
            </div>
            <div className="contact_form_box">
                <ContactForm></ContactForm>
        </div>
    </div>
    </div>
  )
}
