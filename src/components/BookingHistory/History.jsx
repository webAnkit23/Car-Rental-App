import React from 'react'
import { useHistory } from '../../Context/HistoryContext'
import car_data from '../../datas/Car_data';
import Hero from '../../HeroComponents/Hero';
import { FaRupeeSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import './History.css'
export default function History() {
    const {bookingHistory,setBookingHistory} = useHistory();
    const deleteHistory =(index) =>{
      let updatedHistory = bookingHistory.filter((item,i) =>i!=index);
      setBookingHistory(updatedHistory);
    }
  return (
    <>
    <Hero title={'History'}></Hero>
   <div className="historyContainer">
    <h1>Upcoming Journeys...</h1>
     {bookingHistory.length!=0?<div className="historyWrapper">
        {bookingHistory.map((person,i) =>{
           return <div key={i} className='bookingContainer'>
               <div className="hisImage">
                <img src={person.img}></img>
                <p>{person.car_type}</p>
               </div>
               <div className="clientInfo">
                 <span>Name : <p>{person.firstName+" "+person.lastName}</p></span>
                 <span>PickUp from : <p>{person.pick_location}</p></span>
                 <span>Drop To : <p>{person.drop_location}</p></span>
                 <span>PickUp date :<p> {person.pick_date}</p></span>
                 <span>Drop date : <p>{person.drop_date}</p></span>
               </div>
               <div className="total_price">
                 <span>  <FaRupeeSign size={40}     color= '#ff4d30'/><p>{person.price}</p></span>
               </div>
               <span className='deleteHistory'><RxCross2 onClick={() => deleteHistory(i)} color='#ff4d30' size={40}/></span>
               <div className="clientContact">
                <span>Phone no : <p >{person.number}</p></span>
               </div>
            </div>
        })}
     </div>:<h1 style={{color:'black',fontSize:'30px' ,textAlign:'center',width:'100%'}}>List is Empty</h1>}
   </div>
   </>
  )
}
