import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Pakages.css'

function Pakages() {
    const [activeTab, setActiveTab] = useState("packages");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
  
    // Handlers for incrementing and decrementing values
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
      if (value > 0) setter(value - 1);
    };
 
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


    const handleTabClick = (tab) => {
      setActiveTab(tab);
    }
  return (
    <>
    <div className="h-main-container">
        <div id="header-button">
            <div className="inner-header-btn">

           <button className={`nav-button ${activeTab === "packages" ? "active" : ""}`}><i className=" icon fa-solid fa-box"></i> Packages</button>

            <Link to="/services"><button className={`nav-button ${activeTab === "cars" ? "active" : ""}`}><i class=" icon fa-solid fa-car-rear"></i> Cars</button></Link>

            <button className={`nav-button ${activeTab === "mice" ? "active" : ""}`}>MICE</button>

            <button className={`nav-button ${activeTab === "gift" ? "active" : ""}`}>Gift Cards</button>
            </div>
            <div><span></span></div>
            <div><span></span></div>
        </div>
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
                        <div >
                          <div className="labell">Guests and Rooms</div>
                          <div  className="inpu" onClick={toggleDropdown}>{adults} Adults - {children} Children</div>
                          {isDropdownOpen && (
                            <>   
                            <div className="inner-drop" >      
                                <div className="input-group">
                                  <label><span>Rooms</span></label>
                                  <div className="counter">
                                    <button onClick={() => decrement(setRooms, rooms)}>-</button>
                                    <span>{rooms}</span>
                                    <button onClick={() => increment(setRooms, rooms)}>+</button>
                                  </div>
                                </div>
                                <div className="combine-grp">
                                  <div className="input-group">
                                    <label><span>Adults</span> Above 12 years</label>
                                    <div className="counter">
                                      <button onClick={() => decrement(setAdults, adults)}>-</button>
                                      <span>{adults}</span>
                                      <button onClick={() => increment(setAdults, adults)}>+</button>
                                    </div>
                                  </div>

                                  <div className="input-group">
                                    <label><span>Children</span> Below 12 years</label>
                                    <div className="counter">
                                      <button onClick={() => decrement(setChildren, children)}>-</button>
                                      <span>{children}</span>
                                      <button onClick={() => increment(setChildren, children)}>+</button>
                                    </div>
                                </div>
                                </div>
                                <div className="input-group">
                                  <label><span>Infants</span> Less than 2 years</label>
                                  <div className="counter">
                                    <button onClick={() => decrement(setInfants, infants)}>-</button>
                                    <span>{infants}</span>
                                    <button onClick={() => increment(setInfants, infants)}>+</button>
                                  </div>
                                </div>
                              </div>
                          </>
                          )}
                        </div>
                      </div>
                          <div className='search-pkg'>
                            <Link to='/SelectedArea'><button>Search</button></Link>
                          </div>
                    </div>
                </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Pakages