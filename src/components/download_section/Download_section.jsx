import React from 'react'
import './download_Section.css'
function Download_section() {
  return (
    <section className='download_section'>
        <div className="download_container">
            <div className="download_text_area">
               <h1>Download our app to get most out of it</h1>
               <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
              <div className="download_buttons">
                <button><img src='src\components\download_section\download_images\googleplay.svg'></img></button>
                <button><img src='src\components\download_section\download_images\appstore.svg'></img></button>
              </div>
              </div>
        </div>
    </section>
  )
}

export default Download_section