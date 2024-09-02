import React from 'react'
import { useState } from 'react'
import Carbooking from '../HomePage/Carbooking/Carbooking'


function Header() {
  const [activeTab, setActiveTab] = useState("packages");
 

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
  return (
    <>
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
    
      </>
            )}

            {activeTab === "cars" && (
              <>
                  <Carbooking/>
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

export default Header