import React  from 'react'
import { useState } from 'react';
import './Reservation.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosInformationCircle } from "react-icons/io";
import car_data from '../../datas/Car_data';
import ReservationForm from './ReservationForm';
export default function Reservation({form,handleshowreserve,handleReserveSuccess}) {
  const [formsuccess ,setformsuccess] =useState(false);
  const handleformsuccess =(value) =>{
    setformsuccess(value);
    if(value===true){
      handleshowreserve(false);
      handleReserveSuccess(true);
    }
  }
let img =null;
let price =null;
     for(let i=0;i<car_data.length;i++){
    if(car_data[i].name === form.car_type){
          img =car_data[i].img;
          price =car_data[i].price;
       }
     }
     console.log(formsuccess);
  return (
      <div className="reserve_container" >
        <div className="reserve_heading">
              COMPLETE RESERVATION <RxCross2  size={30} onClick={() => handleshowreserve(false)}/>
        </div>
        <div className="reservation_content">
        <div className="reserve_inner_heading">
          <h3><IoIosInformationCircle /> Upon completing this reservation enquiry, you will receive:</h3>
          <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
        </div>

            <div className="reservation_details">
              <div className="location_info">
                      <h3>Location & Date</h3>
                      <div className="box">
                        <h4><IoCalendarNumber /> Pick-Up Date </h4>
                        <p>{form.pick_date}</p>
                      </div>
                      <div className="box">
                        <h4><IoCalendarNumber /> Drop Date </h4>
                        <p>{form.drop_date}</p>
                      </div>
                      <div className="box">
                        <h4><FaLocationDot /> Pick-Up Location</h4>
                        <p>{form.pick_location}</p>
                      </div>
                      <div className="box">
                        <h4><FaLocationDot /> Drop Location</h4>
                        <p>{form.drop_location}</p>
                      </div>
              </div>
              <div className="car_info">
                   <h3>{form.car_type}</h3>
                   <div><img src={img}></img></div>
              </div>
            </div>
        </div>
       <ReservationForm handleformsuccess ={handleformsuccess} img ={img} price ={price} form ={form}/>
    </div>
  
  )
}
