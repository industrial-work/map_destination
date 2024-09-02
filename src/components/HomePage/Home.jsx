import { useState } from 'react'
import OfferSlider from './OfferSection/OfferSlide'
import Banner from './Banner/Banner'
import Footer from '../Footer/Footer'
import Feature from './Feature/Feature'
import About from './About/About'
import OurServices from './OurServices/OurServices'
import DealSlider from './DealSection/DealSlide'
import './home.css'

function Home() {

  const [activeTab, setActiveTab] = useState("packages");
  const [offerTab, setOfferTab] = useState("All");


    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const handleOfferbtn = (tab) => {
      setOfferTab(tab)
    };

  return (
    <>
    {/* Header Section */}
    <div className="h-main-container">
      <div id="header-button">
        <div className="inner-header-btn">

          <button className={`nav-button ${activeTab === "packages" ? "active" : ""}`} 
          onClick={() => handleTabClick("packages")}>Packages</button>

          <button className={`nav-button ${activeTab === "cars" ? "active" : ""}`}  
          onClick={() => handleTabClick("cars")}>Cars</button>

          <button className={`nav-button ${activeTab === "mice" ? "active" : ""}`}
          onClick={() => handleTabClick('mice')}>MICE</button>

          <button className={`nav-button ${activeTab === "gift" ? "active" : ""}`}
          onClick={() => handleTabClick('gift')}>Gift Cards</button>
        </div>
        <div><span></span></div>
        <div><span></span></div>
      </div>
        
            {activeTab === "packages" && (
              <>
                <div className="white-inside-container">
                  <div className='inner-white'>
                    <div className='parent-pkg'>
                        <div className="child1-pkg">
                          <label className='labell' htmlFor="packages">Packages</label>
                          <input className='inputt' type="text" id='packages' placeholder="Select Package..." />
                        </div>

                        <div className="child2-pkg">
                          <label className='labell' htmlFor="date">Select Date</label>
                          <input className='inputt' type="date" id='date' placeholder="" />
                        </div>

                        <div className="child3-pkg">
                          <label className='labell' htmlFor="guest">Guests and Rooms</label>
                          <input className='inputt' type="text" id='guest' placeholder="0 Adult - 0 Child" />
                      </div>
                          <div className='search-pkg'>
                            <button>Search</button>
                          </div>
                    </div>
                </div>
              </div>

                  {/* Offer Section */}
                  <div className="offer-main-container">
                  <span className='span-offer'>Offers</span>
                  <div className="offer-inner">
                        <div className="offer-btn">
                          <button className={`offer ${offerTab === "All" ? "active" : ""}`} 
                            onClick={() => handleOfferbtn("All")}>All</button>

                            <button className={`offer ${offerTab === "Cabs" ? "active" : ""}`}  
                            onClick={() => handleOfferbtn("Cabs")}>Cabs</button>

                            <button className={`offer ${offerTab === "Packge" ? "active" : ""}`}
                            onClick={() => handleOfferbtn('Packge')}>Packages</button>

                            <button className={`offer ${offerTab === "cards" ? "active" : ""}`}
                            onClick={() => handleOfferbtn('cards')}>Gift Cards</button>
                      </div>
                          <OfferSlider/>
                  </div>

                  </div>
  
                  {/* Jackport Section */}
                  <div className="jackpot-main">
                      <div className="j-heading">
                        <h5 style={{textAlign:"center"}}>SAVE EXTRA WITH OUR EXCLUSIVE DEALS!</h5>
                        <h2 style={{textAlign:"center"}}>Jackpot Deals On Top Selling Packages</h2>
                      </div>
                      <DealSlider/>
                  </div>
    
      </>
            )}

            {activeTab === "cars" && (
              <>
              <div className="white-inside-container">
                <div className='inner-white'>
                  <div className='parent-pkg'>
                <div className="child1-pkg">
                  <label className='labell' htmlFor="packages">Packages</label>
                  <input className='inputt' type="text" id='packages' placeholder="Select Package..." />
                </div>

                <div className="child2-pkg">
                  <label className='labell' htmlFor="date">Select Date</label>
                  <input className='inputt' type="date" id='date' placeholder="" />
                </div>

                <div className="child3-pkg">
                  <label className='labell' htmlFor="guest">Guests and Rooms</label>
                  <input className='inputt' type="text" id='guest' placeholder="0 Adult - 0 Child" />
              </div>
                  <div className='search-pkg'>
                    <button>Search</button>
                  </div>
                  </div>
                </div>
              </div>
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
            )}

            {activeTab === 'mice' && (
              <div className="white-inside-container">
                <div className='inner-white'>
                  <div className='parent-pkg'>
                        <div className="child1-pkg">
                          <label className='labell' htmlFor="packages">Packages</label>
                          <input className='inputt' type="text" id='packages' placeholder="Select Package..." />
                        </div>
                        
                      <div className="child2-pkg">
                        <label className='labell' htmlFor="date">Select Date</label>
                        <input className='inputt' type="date" id='date' placeholder="" />
                      </div>

                      <div className="child3-pkg">
                        <label className='labell' htmlFor="guest">Guests and Rooms</label>
                        <input className='inputt' type="text" id='guest' placeholder="0 Adult - 0 Child" />
                    </div>
                        <div className='search-pkg'>
                          <button>Search</button>
                        </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gift' && (
            <div className="white-inside-container">
                <div className='inner-white'>
                  <div className='parent-pkg'>
                      <div className="child1-pkg">
                        <label className='labell' htmlFor="packages">Packages</label>
                        <input className='inputt' type="text" id='packages' placeholder="Select Package..." />
                      </div>

                      <div className="child2-pkg">
                        <label className='labell' htmlFor="date">Select Date</label>
                        <input className='inputt' type="date" id='date' placeholder="" />
                      </div>

                      <div className="child3-pkg">
                        <label className='labell' htmlFor="guest">Guests and Rooms</label>
                        <input className='inputt' type="text" id='guest' placeholder="0 Adult - 0 Child" />
                      </div>
                      <div className='search-pkg'>
                        <button>Search</button>
                      </div>
                  </div>
                 </div>
            </div>
            )}

      </div>
      
    </>
  )
}

export default Home