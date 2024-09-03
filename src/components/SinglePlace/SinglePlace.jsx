import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SinglePlace.css';

function SinglePlace() {
    const location = useLocation();
    const { state } = location;

    // Initialize form values from state
    const [packageName, setPackageName] = useState(state?.packageName || '');
    const [date, setDate] = useState(state?.date || '');
    const [rooms, setRooms] = useState(state?.rooms || 0);
    const [adults, setAdults] = useState(state?.adults || 0);
    const [children, setChildren] = useState(state?.children || 0);
    const [infants, setInfants] = useState(state?.infants || 0);
    const [errors, setErrors] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

   
        const [range, setRange] = useState([2, 6]);
    
        const handleSliderChange = (newRange) => {
          setRange(newRange);
        };


    // Handlers for input changes
    const handlePackageChange = (event) => setPackageName(event.target.value);
    const handleDateChange = (event) => setDate(event.target.value);

    // Handlers for incrementing and decrementing values
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
        if (value > 0) setter(value - 1);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!packageName) newErrors.packageName = 'Package name is required';
        if (!date) newErrors.date = 'Date is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        console.log({
            packageName,
            date,
            rooms,
            adults,
            children,
            infants
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className="image">
                <img src="https://www.mapmydestination.com/public/uploads/2024020809592.jpg" alt="imm" />
                <div className="middle-content">
                    {packageName}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="white-inside-container">
                <div className='inner-white-single'>
                    <div className='parent-pkg'>
                        <div className="child1-pkg">
                            <label className='labell' htmlFor="packages">Packages</label>
                            <input
                                className={`inputt ${errors.packageName ? 'input-error' : ''}`}
                                type="text"
                                id='packages'
                                placeholder="Select Package..."
                                value={packageName}
                                onChange={handlePackageChange}
                            />
                            {errors.packageName && <p className="error-text">{errors.packageName}</p>}
                        </div>

                        <div className="child2-pkg">
                            <label className='labell' htmlFor="date">Select Date</label>
                            <input
                                className={`inputt ${errors.date ? 'input-error' : ''}`}
                                type="date"
                                id='date'
                                value={date}
                                onChange={handleDateChange}
                            />
                            {errors.date && <p className="error-text">{errors.date}</p>}
                        </div>

                        <div className="child3-pkg" ref={dropdownRef}>
                            <div>
                                <div className="labell">Guests and Rooms</div>
                                <div className="inpu" onClick={toggleDropdown}>
                                    {adults} Adults - {children} Children
                                </div>
                                {isDropdownOpen && (
                                    <div className="inner-drop">
                                        <div className="input-group">
                                            <label><span>Rooms</span></label>
                                            <div className="counter">
                                                <button type="button" onClick={() => decrement(setRooms, rooms)}>-</button>
                                                <span>{rooms}</span>
                                                <button type="button" onClick={() => increment(setRooms, rooms)}>+</button>
                                            </div>
                                        </div>
                                        <div className="combine-grp">
                                            <div className="input-group">
                                                <label><span>Adults</span> Above 12 years</label>
                                                <div className="counter">
                                                    <button type="button" onClick={() => decrement(setAdults, adults)}>-</button>
                                                    <span>{adults}</span>
                                                    <button type="button" onClick={() => increment(setAdults, adults)}>+</button>
                                                </div>
                                            </div>

                                            <div className="input-group">
                                                <label><span>Children</span> Below 12 years</label>
                                                <div className="counter">
                                                    <button type="button" onClick={() => decrement(setChildren, children)}>-</button>
                                                    <span>{children}</span>
                                                    <button type="button" onClick={() => increment(setChildren, children)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <label><span>Infants</span> Less than 2 years</label>
                                            <div className="counter">
                                                <button type="button" onClick={() => decrement(setInfants, infants)}>-</button>
                                                <span>{infants}</span>
                                                <button type="button" onClick={() => increment(setInfants, infants)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='search-pkg'>
                            <button type="submit">Modify</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            {/* -----------Next Section----------- */}
            <div className="parent-main-single">
                <div className="first-singlepage-child">
                    <div className="f-child-fir">
                    
                        <div className="slider-container">
                            <label>Filter by:</label>
                            <div className="slider-label">
                                <span>Itinerary</span>
                            </div>
                            <Slider range
                                min={2}
                                max={6}
                                defaultValue={[2, 6]}
                                value={range}
                                onChange={handleSliderChange}
                                allowCross={false}
                            />
                            <div className="slider-values">
                                <span>{range[0]}D</span>
                                <span>{range[1]}D</span>
                            </div>
                            <hr />
                            <div className="slider-label">
                                <span>Itinerary</span>
                            </div>
                            <Slider range
                                min={2}
                                max={6}
                                defaultValue={[2, 6]}
                                value={range}
                                onChange={handleSliderChange}
                                allowCross={false}
                            />
                            <div className="slider-values">
                                <span>{range[0]}D</span>
                                <span>{range[1]}D</span>
                            </div>
                            </div>

                    </div>
                </div>
                <div className="second-singlepage-child"></div>
            </div>
        </>
    );
}

export default SinglePlace;
