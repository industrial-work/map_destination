import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PackageCard from './PackageCard';
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
    const [price, setPrice] = useState(0)
    const [errors, setErrors] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const dropdownRef = useRef(null);
   
    const [range, setRange] = useState([2, 6]);
    const [budget, setBudget] = useState([3000, 200000]);

    const [themes, setThemes] = useState(state?.themes || []);
    const [places, setPlaces] = useState(state?.places || []);

    const handleSliderChange = (newRange) => setRange(newRange);
    const handleBudgetChange = (newRange) => setBudget(newRange);

    const handleThemeChange = (e) => {
        const value = e.target.value;
        setThemes(themes.includes(value) ? themes.filter((item) => item !== value) : [...themes, value]);
    };

    const handlePlaceChange = (e) => {
        const value = e.target.value;
        setPlaces(places.includes(value) ? places.filter((item) => item !== value) : [...places, value]);
    };

    const handlePackageChange = (event) => setPackageName(event.target.value);
    const handleDateChange = (event) => setDate(event.target.value);

    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => { if (value > 0) setter(value - 1); };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
        console.log({ packageName, date, rooms, adults, children, infants });
    };

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
                                <span>Budget</span>
                            </div>
                            <Slider range
                                min={3000}
                                max={200000}
                                defaultValue={[3000, 200000]}
                                value={budget}
                                onChange={handleBudgetChange}
                                allowCross={false}
                            />
                            <div className="slider-values">
                                <span>₹{budget[0]}</span>
                                <span>₹{budget[1]}</span>
                            </div>
                            </div>
                            <hr />
                            <div className="filter-item slider-label">
                                <span>Themes</span>
                                <div className='check-package'>
                                <input
                                    type="checkbox"
                                    id="family-tour"
                                    value="Family tour packages"
                                    checked={themes.includes('Family tour packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="family-tour">Family tour packages</label>
                                </div>
                                <div className='check-package'>
                                <input
                                    type="checkbox"
                                    id="honeymoon-tour"
                                    value="Honeymoon Tour Packages"
                                    checked={themes.includes('Honeymoon Tour Packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="honeymoon-tour">Honeymoon Tour Packages</label>
                                </div>
                                <div  className='check-package'>
                                <input
                                    type="checkbox"
                                    id="luxury-tour"
                                    value="Luxury Tour Packages"
                                    checked={themes.includes('Luxury Tour Packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="luxury-tour">Luxury Tour Packages</label>
                                </div>
                                <div  className='check-package'>
                                <input
                                    type="checkbox"
                                    id="adventure-tour"
                                    value="Adventure Tour Packages"
                                    checked={themes.includes('Adventure Tour Packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="adventure-tour">Adventure Tour Packages</label>
                                </div>
                                <div className='check-package'>
                                <input
                                    type="checkbox"
                                    id="religious-tour"
                                    value="Religious Tour Packages"
                                    checked={themes.includes('Religious Tour Packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="religious-tour">Religious Tour Packages</label>
                                </div>
                                <div className='check-package'>
                                <input
                                    type="checkbox"
                                    id="summer-tour"
                                    value="Summer Tour Packages"
                                    checked={themes.includes('Summer Tour Packages')}
                                    onChange={handleThemeChange}
                                />
                                <label htmlFor="summer-tour">Summer Tour Packages</label>
                                </div>
                                </div>
                                <hr />
                                <div className="filter-item slider-label">
                                    <span>Places</span>
                                    <div  className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="kashmir-tour"
                                        value="Kashmir Tour Packages"
                                        checked={places.includes('Kashmir Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="kashmir-tour">Kashmir Tour Packages</label>
                                    </div>
                                    <div className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="shimla-tour"
                                        value="Shimla Tour Packages"
                                        checked={places.includes('Shimla Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="shimla-tour">Shimla Tour Packages</label>
                                    </div>
                                    <div className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="himachal-tour"
                                        value="Himachal Tour Packages"
                                        checked={places.includes('Himachal Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="himachal-tour">Himachal Tour Packages</label>
                                    </div>
                                    <div className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="uttarakhand-tour"
                                        value="Uttarakhand Tour Packages"
                                        checked={places.includes('Uttarakhand Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="uttarakhand-tour">Uttarakhand Tour Packages</label>
                                    </div>
                                    <div className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="manali-tour"
                                        value="Manali Tour Packages"
                                        checked={places.includes('Manali Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="manali-tour">Manali Tour Packages</label>
                                    </div>
                                    <div className='check-package'>
                                    <input
                                        type="checkbox"
                                        id="ladakh-tour"
                                        value="Ladakh Tour Packages"
                                        checked={places.includes('Ladakh Tour Packages')}
                                        onChange={handlePlaceChange}
                                    />
                                    <label htmlFor="ladakh-tour">Ladakh Tour Packages</label>
                                    </div>
                                </div>
    
                    </div>
                </div>
                <div className="midd"></div>
                <div className="second-singlepage-child">
                    <div className="package-cards-section">
                        <PackageCard 
                            packageName='Premium Packges'
                            price='₹16000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                        <PackageCard 
                            packageName='Luxury Packges'
                            price='₹14000'
                            date={date}
                            rooms={rooms}
                            adults={adults}
                            children={children}
                            infants={infants}
                            themes={themes}
                            places={places}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePlace;



// Api Integration
{/* <div className="filter-item">
          <h3>Themes</h3>
          <ul>
            {themes.map((theme) => (
              <li key={theme.id}>
                <input
                  type="checkbox"
                  id={theme.id}
                  onChange={() => handleThemeChange(theme)}
                />
                <label htmlFor={theme.id}>{theme.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-item">
          <h3>Places</h3>
          <ul>
            {places.map((place) => (
              <li key={place.id}>
                <input
                  type="checkbox"
                  id={place.id}
                  onChange={() => handlePlaceChange(place)}
                />
                <label htmlFor={place.id}>{place.name}</label>
              </li>
            ))}
          </ul>
        </div>
      </div> */}