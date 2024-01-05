import React from 'react'
import './InputBox.css'
const style ={
  display: 'flex',
  flexDirection : 'column',
  alignItems:'start',
  gap: '0.5rem',
  margin: '0.5rem',
  
  maxWidth : '100%'
}
const labelstyle ={
color: 'grey',
fontSize: '18px'
}
const inputstyle ={
padding: '0.5rem',
height: '45px',
background: '#cacaca',
outline : 'none',
fontSize : '17px',
color : 'grey',
width : '100%'
}
export default function InputBox(props) {
  let type ='text';
  if(props.name==='email'){
    type = 'email';
  }
  else if(props.name ==='number'|| props.name ==='age'||props.name==='zipCode'){
    type ='number';
  }
  
  return (
       <div style={style} className={`width  ${props.label==='Email' || props.label ==='Address' ? 'width-100' : ''} `}>
         <label htmlFor={props.label} style={labelstyle}>{props.label} <span>*</span></label>
         <input  id ={props.label} type={type} value={props.value} name={props.name} placeholder = {`Enter your ${props.label}`} style={inputstyle} onChange={(e) =>props.handleChange(e.target.name,e.target.value)}></input>
        <p style={props.value==='' ? {opacity: '1'} : {opacity : '0'}}>this field is required</p> 
     </div>
  )
}
