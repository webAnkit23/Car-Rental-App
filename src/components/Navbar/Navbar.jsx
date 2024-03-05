import React from 'react'
import './Navbar.css';
import { useState} from 'react'; 
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link ,Outlet} from 'react-router-dom';
import lofo from './imagesNavSection/NavbarLogo.png'


function Navbar() {
  const [isActive, setActive] = useState('hide_nav');
  const handleClick =() =>{
    if(isActive==='show_nav'){
      setActive('hide_nav');
    }
  }
  return (
    <>
    <nav className={`containter` }>
        <div className={`nav_iconContainter  ${isActive==='show_nav' ? 'hide_Icon':''}`}>
        <Link to='/'> <img className='NavIcon' src={lofo} alt='car rent'/></Link>
        </div>

        <ul  className={`nav_ul ${isActive}`}>
     <li className='nav_list_item'><Link to='/'className='a' onClick={handleClick}>Home</Link></li>
         <li className='nav_list_item'><Link to='/about' className='a' onClick={handleClick}>About</Link></li>
         <li className='nav_list_item'><Link to='/vehicles' className='a' onClick={handleClick}>Vehicle Models </Link></li>
         <li className='nav_list_item'><Link to='/testimonials' className='a' onClick={handleClick}>Testimonials</Link></li>
         <li className='nav_list_item'><Link to='/ourteam' className='a' onClick={handleClick}>Our Team</Link></li>
         <li className='nav_list_item'><Link to='/contact' className='a' onClick={handleClick}>Contact</Link></li> 
         <li className='nav_list_item'><Link to ='/history' className='a' onClick={handleClick}>History</Link></li>
        </ul>

    <div className="buttonContainter">
      <button className='Register_button'>Register</button>
    </div>
    <button  className='bars' style={isActive==='show_nav' ? {position : 'fixed'}: {position : 'absolute'}}
     onClick={() => setActive(isActive==='hide_nav' ? 'show_nav' : 'hide_nav')}>{isActive==='show_nav'?<RxCross2 size={30}  />:<FaBars size={30}/>}</button>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar
