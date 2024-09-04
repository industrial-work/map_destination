import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import './SelectedPackage.css'

function SelectedPackage() {
    const location = useLocation();
    const { state } = location;

    const [traveler, setTraveler] = useState({ name: '', phone: '', email: '' });

        const handleInputChange = (e) => {
            setTraveler({ ...traveler, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // addTraveler(traveler);
        };

  return (
    <> 
        <div className="image-re">
                <img src="https://www.mapmydestination.com/public/uploads/2024020809592.jpg" alt="imm" />
                <div className="overlay"></div>
                <div className="Sele-content">
                    Review Your Package
                </div>
            </div>

        <div className="sele-main-parent">
            <div className="sele-first">
                <div className="packageN">
                <p>{state?.packageN}</p>
                </div>
                <div className="package-name">
                <p>To {state?.packageName}</p>
                </div>
                <hr className='hrr' />
                <div className="room-parent">
                    <div className="roomseg">
                        <p>{state?.rooms} Rooms  <span>|</span></p>
                        <p> {state?.adults} Adults, </p>
                        <p>{state?.children} Child </p>
                    </div>
                    <div className="datee">
                        <p>12 Persons (inc. 3 child)</p>
                        <p>23 March 30 March</p>
                    </div>
                </div>
                <hr className='hrr'  />
                <div className="flex-add">
                <h4>Traveler 1 - 12*</h4>
                <button>Add Details</button>
                </div>
                
                <div className="detail-container">
                    <div className="inner-contact">
                <div className="contact-details">
                    <form onSubmit={handleSubmit}>
                        <p>Enter Contact Details:</p>
                        <div className="detail-input">
                        <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={traveler.name}
                        onChange={handleInputChange}
                        />
                        <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={traveler.phone}
                        onChange={handleInputChange}
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={traveler.email}
                        onChange={handleInputChange}
                        />
                        </div>
                    </form>
                    </div>
                </div>
                    </div>
                </div>
            <div className="sele-second">
                <div className="promo">
                <div className="package-details">
                    <div className="flexx">
                        <p>Package Cost</p>
                        <p>{state?.price}</p>
                    </div>
                    <p>Addons</p>
                    <p>Taxes</p>
                    <hr className='hrr'/>
                    <p>Total Cost</p>
                    <hr className='hrr'/>
                    <p>Promo Code </p>
                    <div className="promo-input">
                        <input type="text" placeholder="Enter Promo Code"/>
                        <button>Redeem Now</button>
                    </div>
                    <div className="promo-codes">
                        <div className="inner-pr-co">
                            <h4>Available Coupons for this package</h4>
                            <hr className='hrr' />
                            <div className="flexx">
                                <p>2MD100NN</p>
                                <button>Apply</button>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
           
            </div>
        </div>
        {/* <div>
            <h2>Package Details</h2>
            <p>Package Name: {state?.packageName}</p>
            <p>Date: {state?.date}</p>
            <p>Rooms: {state?.rooms}</p>
            <p>Adults: {state?.adults}</p>
            <p>Children: {state?.children}</p>
            <p>Infants: {state?.infants}</p>
            <p>Themes: {state?.themes.join(', ')}</p>
            <p>Places: {state?.places.join(', ')}</p>
         </div> */}
    </>
  )
}

export default SelectedPackage