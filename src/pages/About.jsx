import React from 'react'
import HeroSection from '../HeroComponents/Hero'
import Navbar from '../components/Navbar/Navbar'
import AboutCompany from '../components/AboutCompany/AboutCompany'

export default function About() {
  return (
    <>
    <HeroSection title={'About'}></HeroSection>
    <AboutCompany></AboutCompany>
    </>
  )
}
