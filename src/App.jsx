import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import './App.css'
import { useHistory } from "./Context/HistoryContext"
import { Suspense } from "react";
const About = React.lazy(()=>import("./pages/About"));
const OurTeam = React.lazy(()=>import("./pages/OurTeam"));
const Testimonials = React.lazy(()=>import("./pages/Testimonials"));
const Vehicle = React.lazy(()=>import("./pages/Vehicle"));
const History = React.lazy(() =>import("./components/BookingHistory/History"));
const Contact = React.lazy(()=>import("./pages/Contact"))
function App() {
 
 
  return (
    <>
    <BrowserRouter>
    <Suspense fallback ={<div>loading</div>}>
    <Navbar />
       <Routes>
        <Route  path="/" element ={<Home />}></Route>
          <Route path="about" element ={<About />}></Route>
          <Route path="contact" element ={<Contact />}></Route>
          <Route path="testimonials" element ={<Testimonials />}></Route>
          <Route path="vehicles" element ={<Vehicle />}></Route>
          <Route path = "ourteam" element ={<OurTeam />}></Route>
          <Route path = "history" element ={<History />}></Route>
       </Routes>
       <Footer/>
       </Suspense>
      
    </BrowserRouter>
   
    </>
  )
}

export default App
