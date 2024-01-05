import React from 'react'
import './download_Section.css'
import appstore from './download_images/appstore.svg'
import b from './download_images/bg.png'
import google from './download_images/googleplay.svg'
function Download_section() {
  const dstyle ={
    backgroundImage : `url(${b})`,
    backgroundColor: '#f8f8f8',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    padding: '5rem 0rem',
    width: '100%'
   
  }
  return (
    <section className='download_section' style={dstyle}>
        <div className="download_container">
            <div className="download_text_area">
               <h1>Download our app to get most out of it</h1>
               <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
              <div className="download_buttons">
                <button><img src={google}></img></button>
                <button><img src={appstore}></img></button>
              </div>
              </div>
        </div>
    </section>
  )
}

export default Download_section