import React, { useState } from 'react'
import Carbooking from '../../HomePage/Carbooking/Carbooking'
import { Link } from 'react-router-dom';

function Pakages() {
    const [activeTab, setActiveTab] = useState("cars");
 

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    }
  return (
    <>
    <div className="h-main-container">
        <div id="header-button">
            <div className="inner-header-btn">

            <Link to="/"><button className={`nav-button ${activeTab === "packages" ? "active" : ""}`}><i className=" icon fa-solid fa-box"></i> Packages</button></Link>

            <button className={`nav-button ${activeTab === "cars" ? "active" : ""}`}><i class=" icon fa-solid fa-car-rear"></i> Cars</button>

            <button className={`nav-button ${activeTab === "mice" ? "active" : ""}`}>MICE</button>

            <button className={`nav-button ${activeTab === "gift" ? "active" : ""}`}>Gift Cards</button>
            </div>
            <div><span></span></div>
            <div><span></span></div>
        </div>
        <Carbooking/>
    </div>
    
    </>
  )
}

export default Pakages