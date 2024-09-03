import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pakages.css';

function Pakages() {
    const [activeTab, setActiveTab] = useState("packages");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [packageName, setPackageName] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // Handler for input changes
    const handlePackageChange = (event) => {
      setPackageName(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };  

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Clear previous errors
        const newErrors = {};

        // Validate inputs
        if (!packageName) newErrors.packageName = 'Package name is required';
        if (!date) newErrors.date = 'Date is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Clear errors and navigate
        setErrors({});
        navigate('/SelectedArea', { state: { packageName, date,rooms,
          adults,
          children,
          infants } });
    };
      
    // Handlers for incrementing and decrementing values
    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
        if (value > 0) setter(value - 1);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return (
        <div className="h-main-container">
            <div id="header-button">
                <div className="inner-header-btn">
                    <button className={`nav-button ${activeTab === "packages" ? "active" : ""}`}><i className="icon fa-solid fa-box"></i> Packages</button>
                    <Link to="/services">
                        <button className={`nav-button ${activeTab === "cars" ? "active" : ""}`}><i className="icon fa-solid fa-car-rear"></i> Cars</button>
                    </Link>
                    <button className={`nav-button ${activeTab === "mice" ? "active" : ""}`}>MICE</button>
                    <button className={`nav-button ${activeTab === "gift" ? "active" : ""}`}>Gift Cards</button>
                </div>
                <div><span></span></div>
                <div><span></span></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="white-inside-container">
                    <div className='inner-white'>
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
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Pakages;
