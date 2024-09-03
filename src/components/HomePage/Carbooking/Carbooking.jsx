import React, { useState } from 'react';
import './Carbooking.css';

const Carbooking = () => {
  const [selected, setSelected] = useState('one-way'); // State to track the selected radio button

  // Handler for radio button change
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
    <div className="main-book">
        <div className="white-inside-container">
            <div className='inner-white'>
                <div className='car-radio-btn'>
                <span
                    className={`radio-option ${selected === 'one-way' ? 'active' : ''}`}
                >
                    <input
                    type="radio"
                    name="car"
                    value="one-way"
                    id="one-way"
                    checked={selected === 'one-way'}
                    onChange={handleChange}
                    />
                    <label htmlFor="one-way">One way</label>
                </span>

                <span
                    className={`radio-option r2 ${selected === 'hourly-rental' ? 'active' : ''}`}
                >
                    <input
                    type="radio"
                    name="car"
                    value="hourly-rental"
                    id="hourly-rental"
                    checked={selected === 'hourly-rental'}
                    onChange={handleChange}
                    />
                    <label htmlFor="hourly-rental">Hourly Rental</label>
                </span>

                <span
                    className={`radio-option ${selected === 'round-trip' ? 'active' : ''}`}
                >
                    <input
                    type="radio"
                    name="car"
                    value="round-trip"
                    id="round-trip"
                    checked={selected === 'round-trip'}
                    onChange={handleChange}
                    />
                    <label htmlFor="round-trip">Round-trip</label>
                </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            
                <div className='carBooking-parent'>
                    <div className="child1-carB">
                        <label className='labell' htmlFor="from">From</label>
                        <input className='inputt' type="text" id='from' placeholder="From" />
                    </div>

                        <div className="child2-carB">
                        <label className='labell' htmlFor="to">To</label>
                        <input className='inputt' type="text" id='to' placeholder="To" />
                        </div>

                        <div className="child3-carB">
                        <label className='labell' htmlFor="date">Depature</label>
                        <input className='inputt' type="date" id='date' placeholder="" />
                        </div>

                        <div className="child4-carB">
                        <label className='labell' htmlFor="time">Pickup Time</label>
                        <input className='inputt' type="text" id='time' placeholder="1:00 AM" />
                    </div>
                        <div className='search-carB'>
                            <button>Search</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  );
};

export default Carbooking;
