import { useState,useEffect } from "react";
const getValue =(key ,initialValue) =>{
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue)return savedValue;
    if(initialValue instanceof Function)return initialValue();
    return initialValue;
}
export const useLocalStorage =(key ,initialValue) =>{
 const [bookingHistory ,setBookingHistory] = useState(() =>{
   return getValue(key ,initialValue);
 });
 useEffect(() =>{
    localStorage.setItem(key ,JSON.stringify(bookingHistory));
 },[bookingHistory]);
 return [bookingHistory ,setBookingHistory];
}