
import React from "react"
import { RxCross2 } from "react-icons/rx";
import './Booking.css'
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot} from "react-icons/fa6";
import { TbCalendarEvent, TbRubberStamp } from "react-icons/tb";
import { useState } from "react";
import Reservation from "../Reservation/Reservation";
import car_data from "../../datas/Car_data";
import bookingbg from './imagesBookingSection/bookingbackground.png'

export default function Booking({sectionRef}) {
  const data ={
    locations :['Select Location' ,'Gorakhpur' ,'Lucknow' ,'Prayagraj' ,'Varanasi' ,'Jaipur' ,'Guwahati','Jammu'],
  }
     const [showmessege ,setshowmessege] = useState(false);
     const [showreserve,setshowreserve] =useState(false);
     const [reservesuccess ,setreservesuccess] = useState(null);
     const [form ,setform ] =useState({
      car_type : 'Select your Car type',
      pick_location : 'Select Location',
      drop_location : 'Select Location',
      pick_date : '',
      drop_date : ''
     });
     const handleReserveSuccess = (value) =>{
            setreservesuccess(value);
            setshowmessege(true);
     }
     let handleshowreserve =(item) =>{
        setshowreserve(item);
   }
     let handlechange = ((e) => {
             setform({
              ...form,
              [e.target.name] : e.target.value
             })
     });

    let handleSubmit =(e) => {
      e.preventDefault();

      if(form.car_type==='Select your Car type'||form.pick_date==='Select Location'||form.drop_location==='Select Location'||form.pick_date===''||form.drop_date===''){
        setshowreserve(false);
        setreservesuccess(false);
        setshowmessege(true);
        
      }
   else{
       setshowreserve(true);
    }
    }

  return (
    <>
    <div className="booking_container" ref={sectionRef}>
      <div className="booking_wrapper">
        <div className="inside_items" style={{backgroundImage : `url(${bookingbg})`}}>
          <h4>Book a Car</h4>
          {showmessege &&  <div className={`messege ${reservesuccess===true ? 'green' : 'red'}`}>
               {reservesuccess ? 'Check your Email !' : 'all inputs are required'} <RxCross2 onClick={() => setshowmessege(false)}/>
            </div>}
          <form className="booking_form" onSubmit={handleSubmit}>
             <div className="input_car_type_container">
              <label className="label" htmlFor="car"> <FaCarSide size={20} />Select your Car type *</label>
              <select id="car" className="select" value={form.car_type} name="car_type" onChange={(e) =>handlechange(e)}>
                <option>Select your car type</option>
                 {car_data.map((car) =><option key={car.name} value={car.name}>{car.name}</option>)}
              </select>
             </div>
             <div className="input_car_type_container">
              <label className="label" htmlFor="pick_location" >  <FaLocationDot size={20}/>Pick-up *</label>
              <select id="pick_location" className="select" value={form.pick_location} name="pick_location" onChange={(e) =>handlechange(e)}>
                 {data.locations.map((place) =><option key={place} value={place}>{place}</option>)}
              </select>
             </div>
             <div className="input_car_type_container">
              <label className="label" htmlFor="drop_location" ><FaLocationDot size={20} />Drop-off *</label>
              <select id="drop_location" className="select" value={form.drop_location} name="drop_location" onChange={(e)=>handlechange(e)}>
                 {data.locations.map((place) =><option key={place} value={place}>{place}</option>)}
              </select>
             </div>
             <div className="input_car_type_container">
              <label className="label" htmlFor="pick_up_date" > <TbCalendarEvent size={20}/>Pick-up Date *</label>
                 <input className="select" id="pick_up_date" type="date" name="pick_date" value={form.pick_date} onChange={(e) =>handlechange(e)}></input>
             </div>
             <div className="input_car_type_container">
              <label className="label" htmlFor="drop_off_date" ><TbCalendarEvent size={20} />Drop-off Date *</label>
              <input className="select" id="drop_off_date" type="date" name="drop_date" value={form.drop_date} onChange={(e) =>handlechange(e)}></input>
             </div>  
              <button className="search_button" type="Submit" >Search</button>  
          </form>
        </div>
      </div>
    </div>
    {showreserve && <Reservation form ={form} handleshowreserve ={handleshowreserve} handleReserveSuccess ={handleReserveSuccess}></Reservation>}
       </>
    
  )
}
