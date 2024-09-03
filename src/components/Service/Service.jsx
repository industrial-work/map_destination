import React from 'react'
import Cars from '../Header/Cars/Cars';
import OurServices from '../HomePage/OurServices/OurServices';
import Banner from './Banner/Banner'
import Feature from '../HomePage/Feature/Feature'
// import About from './About/About'
import Footer from '../Footer/Footer'

function Service() {

  return (
    <>
      <Cars/>
       <div className="OurServices"  >
          <OurServices name={"SERVICES"}/>
       </div>
          {/* <div className="Feature"> */}
              <Feature/>
          {/* </div> */}
          <div className="Banner">
              <Banner/>
          </div>
          <div className="About">
              {/* <About/> */}
          </div>
        <Footer/>
    </>
  )
}

export default Service