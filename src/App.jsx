import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import OurTeam from "./pages/OurTeam"
import Testimonials from "./pages/Testimonials"
import Vehicle from "./pages/Vehicle"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route  path="/" element ={<Home />}></Route>
          <Route path="about" element ={<About />}></Route>
          <Route path="contact" element ={<Contact />}></Route>
          <Route path="testimonials" element ={<Testimonials />}></Route>
          <Route path="vehicles" element ={<Vehicle />}></Route>
          <Route path = "ourteam" element ={<OurTeam />}></Route>
       </Routes>
       <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
