import React from 'react'
import './VehicleCard.css'
import { useNavigate } from 'react-router-dom';
import { MdStarBorder } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
export default function VehicleCard({vehicle}) {
    const a =[0,0,0,0,0];
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
  return (
    <div className="card_section">
    <div className="vehicle_card_container">
        <img src={vehicle.image}></img>
        <div className="vehicle_info">
           <div className="v_info">
            <div className="left_v">
            <h1>{vehicle.name}</h1>
            <p>{a.map((i ,ind) => <MdStarBorder key={ind}/> )}</p>
            </div>
            <div className="right_v">
            <h1>{vehicle.price}</h1>
            <p>per day</p>
            </div>
           </div>
           <div className="v_info ">
            <div className="left_v flex">
                <IoCarSport />  {vehicle.models[0]}
            </div>
            <div className="right_v flex">
                <p>4/5 <IoCarSport /></p>
            </div>
           </div>
           <div className="v_info ">
           <div className="left_v flex">
                <IoCarSport />  {vehicle.models[1]}
            </div>
            <div className="right_v flex">
                <p>Diesel <IoCarSport /></p>
            </div>
           </div>

           <div className="vehicle_button">
           <button className='footer_button' onClick={handleClick}>Book Ride</button>
           </div>
        </div>
    </div>
</div>
  )
}
