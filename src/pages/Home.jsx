import React from 'react'
import Booking from '../components/BookingInput/Booking'
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/herosection/HeroSection"
import PlanSection from '../components/PlanSection/PlanSection'
import Banner from '../components/Banner/Banner'
import ChooseSection from '../components/ChooseSection/ChooseSection'
import TestimonialSection from '../components/TestimonialsSection/TestimonialSection'
import FAQ from '../components/FAQ/FAQ'
import Download_section from '../components/download_section/Download_section'
import PickSection from '../components/HomepickCar/PickSection'
import { useRef } from 'react'
import Reservation from '../components/Reservation/Reservation'


export default function Home() {
  const sectionRef = useRef(null);
 
  return (
    <>
     <p style={{height : '100px'}}></p>
    <HeroSection></HeroSection>
     <Booking sectionRef ={sectionRef}></Booking>
     <PlanSection></PlanSection>
     <PickSection sectionRef ={sectionRef}></PickSection>
     <Banner></Banner>
     <ChooseSection></ChooseSection>
     <TestimonialSection></TestimonialSection>
     <FAQ></FAQ>
     <Download_section></Download_section> 
     </>
  )
}
