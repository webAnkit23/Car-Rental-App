import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../HeroComponents/Hero'
import TeamInfo from '../components/Team_info/TeamInfo'

export default function OurTeam() {
  return (
    <>
    <HeroSection title = {'Our Team'}></HeroSection>
     <TeamInfo ></TeamInfo>
    </>
  )
}
