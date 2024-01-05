import React, { useEffect } from 'react'
import Hero from '../HeroComponents/Hero'
import AllVehicles from '../components/vehicles/AllVehicles'

export default function Vehicle() {
  return (
    <>
      <Hero title={'Vehicle Models'}></Hero>
      <AllVehicles></AllVehicles>
    </>
  )
}
