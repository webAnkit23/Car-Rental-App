import React from 'react'
import VehicleCard from './VehicleCard';
  let vehicles =[{
       name : 'Audi S1',
       models:['Audi' ,'Manual'],
       price : '$45',
       image: 'https://car-rental-ten.vercel.app/static/media/audi-box.b3263089022dd5e025dc.png'
  },
  {
    name : 'Golf 6',
    models:['VW' ,'Manual'],
    price : '$37',
    image: 'https://car-rental-ten.vercel.app/static/media/golf6-box.1982e958d19e04048c14.png'
  },
  {
    name : 'Toyato',
    models:['Camry' ,'Manual'],
    price : '$30',
    image: 'https://car-rental-ten.vercel.app/static/media/toyota-box.8968332b7901c6bb183c.png'
  },
  {
    name : 'BMW 320',
    models:['ModernLine' ,'Manual'],
    price : '$35',
    image: 'https://car-rental-ten.vercel.app/static/media/bmw-box.185d90ec902e13d80eea.png'
  },
  {
    name : 'Mercedes',
    models:['Benz GLK' ,'Manual'],
    price : '$50',
    image: 'https://car-rental-ten.vercel.app/static/media/benz-box.a9aa68ef5eb5af1f342b.png'
  },
  {
    name : 'VW Passat',
    models:['CC' ,'Manual'],
    price : '$25',
    image: 'https://car-rental-ten.vercel.app/static/media/passat-box.c78021e11cf230128bcc.png'
  }

];
export default function AllVehicles() {
  return (
    <section className='vehicles'>
      <div className="vehicles_container" style={{display: 'flex', flexWrap : 'wrap',gap : '4rem',alignItems: 'center',justifyContent:'center', marginTop : '5rem'}}>
        {vehicles.map((vehicle) =>{
          return <VehicleCard key={vehicle.name} vehicle ={vehicle}></VehicleCard>
        })}
      </div>
    </section>
  )
}
