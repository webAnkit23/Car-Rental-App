import React, { useState ,useEffect} from 'react'
import './PickSection.css'
import car_data from '../../datas/Car_data';
export default function PickSection({sectionRef}) {
    let [selectedCar ,setselectedCar] = useState(car_data[0]);
    const [isloading ,setisLoading] = useState(true);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
      useEffect(() => {
            setisLoading(true);
      } ,[selectedCar])
    
    const handleclick =(e) =>{
       if(e.target.id===selectedCar.name)return;
         for(let i=0;i<car_data.length;i++){
            if(e.target.id === car_data[i].name){
                setselectedCar(car_data[i]);
                break;
            }
         }
    }
  return (
    <section className='pick_car_section'>

        <div className="pick_car_container">
            <div className="pick_car_heading">
                <h4>Vehicle Models</h4>
                <h1>Our rental fleet</h1>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="car_models">
                  <div className="car_name_section">
                    {car_data.map((car) => <div key={car.name} id={car.name} className={` ${car.name===selectedCar.name ? 'active' : ''} car_name`} onClick={(e) => handleclick(e)}>{car.name}</div>)}
                  </div>
                  
                      <div className="selected_car_img">
                           {isloading && <div className='loader' style={{alignSelf : 'center' ,justifySelf : 'center'}}></div>}
                       <img src={selectedCar.img} style={isloading ? {display : 'none'} : {display : 'block'}} onLoad={() => setisLoading(false)}></img>
                      </div>
                      <div className="selected_car_data">
                        <p className='active price'><span>{selectedCar.price}  /</span>rent per day</p>
                        {Object.entries(selectedCar).map(([key, value]) => (
                         key!=='name'&& key!=='price' && key!=='img'&& <div key={key} className='car_entity'>
                                  <span >{key}</span> 
                                  <span className={key==='transmission' ? 'transmission' :''}>|</span> 
                                  <span>{value}</span> 
                                </div>
        ))}
                             <button className='footer_button' onClick={scrollToSection}>Reserve Now!</button>
                      </div>
                 </div>
                 </div>
    </section>
  )
}
