import React, { useState } from 'react'
import './ContactForm.css'
import { IoMailOpenOutline } from "react-icons/io5";
export default function ContactForm() {
  let [form ,setform] = useState({
    full_name :'',
    email : '',
    inbox : ''
  }); 
  let handlechange =(e) =>{
      setform({
        ...form,
        [e.target.name] : e.target.value
      })
  }
  let handleformsubmit =(e) =>{
      e.preventDefault();
      setform({
        full_name :'',
        email : '',
        inbox : ''
      });
  }
  return (
    <section className='contact_form_section'>
       <form onSubmit={ e =>handleformsubmit(e)}>
        <div className="input_box">
           <label htmlFor='full_name'>Full Name <span>*</span></label>
          <input type='text' id='full_name' placeholder='E.g: Joe Shome' value={form.full_name} name='full_name' onChange={(e) => handlechange(e)}></input>
          </div>
          <div className="input_box">
          <label htmlFor='email'>Email<span>*</span></label>
          <input type='email' id='email' placeholder='asbdsn@example.com' name='email' value={form.email} onChange={(e) => handlechange(e)}></input>
          </div>
          <div className="input_box">
          <label htmlFor='inbox'>Tell us about it <span>*</span></label>
          <textarea type='text' id='inbox'  placeholder='Write here...' name='inbox' value={form.inbox} onChange={(e) => handlechange(e)}></textarea>
          </div>
          <button type='submit' className='footer_button'><IoMailOpenOutline></IoMailOpenOutline>  Send Message</button>

       </form>

    </section>
  )
}
