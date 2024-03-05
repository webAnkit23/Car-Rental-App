import React, { useState } from 'react'
import './ReservationForm.css'
import InputBox from './InputBox'
import { useHistory } from '../../Context/HistoryContext';
export default function ReservationForm({handleformsuccess,form,img}) {
  const [reserveForm ,setreserveForm] =useState({
    firstName : '',
    lastName  :'',
    number : '' ,
    age : '',
    email : '',
    address : '',
    city : '',
    zipCode : '',
    checkbox : false
  });
  const {bookingHistory ,setBookingHistory} = useHistory();
  const handleChange =(name ,value) =>{
    setreserveForm({
      ...reserveForm ,
      [name] : value
    });
  }
  let handleSubmit = (e) =>{
    e.preventDefault();
     if(reserveForm.firstName ===''||reserveForm.lastName===''||reserveForm.number ===''||reserveForm.age ===''||reserveForm.email===''||reserveForm.zipCode ===''||reserveForm.address===''||reserveForm.city ===''||reserveForm.checkbox===false){
      handleformsuccess(false);
    }
    else{
        handleformsuccess(true);

        setBookingHistory( [{...form ,...reserveForm,img:img},...bookingHistory])
      const updatedData = {};
     Object.keys(reserveForm).forEach((key) => {
      updatedData[key] = '';
     });
     updatedData[checkbox] = false;
     setreserveForm(updatedData);
     
  } 
  }
  return (
    <div className="reservation_form_container">
        <div className="form_heading">PERSONAL INFORMATION</div>
          <form onSubmit={handleSubmit}>
             <InputBox label = 'First Name' name ='firstName' value ={reserveForm.firstName} handleChange = {handleChange}></InputBox>
             <InputBox label = 'Last Name' name ='lastName' value ={reserveForm.lastName} handleChange = {handleChange}></InputBox>
             <InputBox label = 'Phone Number' name ='number' value ={reserveForm.number} handleChange = {handleChange}></InputBox>
             <InputBox label = 'Age' name ='age' value ={reserveForm.age} handleChange = {handleChange}></InputBox>
             <InputBox  label = 'Email' name ='email' value ={reserveForm.email} handleChange = {handleChange}></InputBox>
             <InputBox label = 'Address' name = 'address' value ={reserveForm.address} handleChange = {handleChange}></InputBox>
             <InputBox label = 'City' name ='city' value ={reserveForm.city} handleChange = {handleChange}></InputBox>
             <InputBox label = 'Zip Code' name ='zipCode' value ={reserveForm.zipCode} handleChange = {handleChange}></InputBox>
             <div className='checkbox_container'>
             <input id='checkbox' type='checkbox' checked={reserveForm.checkbox===true} onChange={() => handleChange('checkbox' , !reserveForm.checkbox)}></input>
             <label htmlFor="checkbox">Please send me latest news and updates</label>
           
             </div>
             <div className="reserve_form_footer">
             <button type='submit' className='footer_button'>Reserve</button>
             </div>
         </form>
    </div>
  )
}
