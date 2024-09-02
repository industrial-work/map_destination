import React from 'react'
import Header from '../Header/Header';
import OurServices from './OurServices/OurServices';
import Banner from './Banner/Banner'
import Feature from './Feature/Feature'
import About from './About/About'
import Footer from '../Footer/Footer'

function Service() {

  return (
    <>
      <Header/>
       <div className="OurServices">
          <OurServices/>
       </div>
       <div className="Banner">
              <Banner/>
          </div>
          <div className="Feature">
              <Feature/>
          </div>
          <div className="About">
              <About/>
          </div>
        <Footer/>
    </>
  )
}

export default Service