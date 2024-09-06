import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import './SelectedPackage.css';
import PopUp from '../PopUp/PopUp'

function SelectedPackage() {
    const location = useLocation();
  const { state } = location;

  const adult = state?.adults;
  const child = state?.children;

  const [traveler, setTraveler] = useState({ name: '', phone: '', email: '' });
  const [buttonPopup, setButtonPopup] = useState(false);

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [childButton, setChildButton] = useState(0);

  // Separate state for adults and children
  const [adultData, setAdultData] = useState(
    Array(adult).fill({ name: '', age: '', gender: '' })
  );
  const [childData, setChildData] = useState(
    Array(child).fill({ name: '', age: '', gender: '' })
  );

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index); // Set the clicked button index for adults
  };
  
  const handleChildClick = (index) => {
    setChildButton(index); // Set the clicked button index for children
  };

  const handleAdultInput = (e, index) => {
    const { name, value } = e.target;
    const updatedAdultData = [...adultData];
    updatedAdultData[index] = { ...updatedAdultData[index], [name]: value };
    setAdultData(updatedAdultData); // Update adult data for the specific button
  };
  console.log(adultData)

  const handleChildInput = (e, index) => {
    const { name, value } = e.target;
    const updatedChildData = [...childData];
    updatedChildData[index] = { ...updatedChildData[index], [name]: value };
    setChildData(updatedChildData); // Update child data for the specific button
  };
  console.log(childData)

  const handleInputChange = (e) => {
    setTraveler({ ...traveler, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonPopup(false);
    // Here you could add logic to store the data, send it to a server, etc.
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
                <button onClick={()=>setButtonPopup(true)}>Add Details</button>
                </div>

                

                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div className="pop-parent">
                    <div className="pop-parent-inner">
                        <h2>Traveler Details:</h2>
                        <div className="pop-btn">
                        {Array.from({ length: adult }, (_, index) => (
                            <div className={`pop-btn-inner ${activeButtonIndex === index ? 'active' : ''}`} key={index}>
                            <button onClick={() => handleButtonClick(index)}>
                                {activeButtonIndex !== index ? `${index + 1}` : `Adult ${index + 1}`}
                            </button>
                            {activeButtonIndex === index && (
                                <>
                                <div className="form-container">
                                    <h4>Adult {index + 1} Details:</h4>
                                    <div className="form-cont-in">
                                    <div className="iput-form">
                                        <label htmlFor={`name${index}`}>Name:</label>
                                        <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={adultData[index].name}
                                        onChange={(e) => handleAdultInput(e, index)}
                                        />
                                    </div>
                                    <div className="iput-form">
                                        <label htmlFor={`age${index}`}>Age:</label>
                                        <input
                                        type="number"
                                        name="age"
                                        placeholder="Age"
                                        value={adultData[index].age}
                                        onChange={(e) => handleAdultInput(e, index)}
                                        />
                                    </div>
                                    <div className="iput-form">
                                        <label htmlFor={`gender${index}`}>Gender:</label>
                                        <select
                                        name="gender"
                                        value={adultData[index].gender}
                                        onChange={(e) => handleAdultInput(e, index)}
                                        id={`gender${index}`}
                                        >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </>
                            )}
                            </div>
                        ))}
                        </div>
                        <div className="zarar">
                        <div className="pop-btn">
                            {Array.from({ length: child }, (_, index) => (
                            <div className={`pop-btn-inner ${childButton === index ? 'active' : ''}`} key={index}>
                                <button onClick={() => handleChildClick(index)}>
                                {childButton !== index ? `${index + 1}` : `Child ${index + 1}`}
                                </button>
                                {childButton === index && (
                                <>
                                    <div className="form-container-child">
                                    <h4>Child {index + 1} Details:</h4>
                                    <div className="form-cont-in">
                                        <div className="iput-form">
                                        <label htmlFor={`name${index}`}>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={childData[index].name}
                                            onChange={(e) => handleChildInput(e, index)}
                                        />
                                        </div>
                                        <div className="iput-form">
                                        <label htmlFor={`age${index}`}>Age:</label>
                                        <input
                                            type="number"
                                            name="age"
                                            placeholder="Age"
                                            value={childData[index].age}
                                            onChange={(e) => handleChildInput(e, index)}
                                        />
                                        </div>
                                        <div className="iput-form">
                                        <label htmlFor={`gender${index}`}>Gender:</label>
                                        <select
                                            name="gender"
                                            value={childData[index].gender}
                                            onChange={(e) => handleChildInput(e, index)}
                                            id={`gender${index}`}
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                </>
                                )}
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                </PopUp>

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
                 {/* Display Adult Data Here */}
                 {/* <div className="adult-data">
                        <h2>Adult Details</h2>
                        {adultData.map((item, index) => (
                            <div key={index}>
                                <h3>Adult {index + 1}</h3>
                                <p><strong>Name:</strong> {item.name}</p>
                                <p><strong>Age:</strong> {item.age}</p>
                                <p><strong>Gender:</strong> {item.gender}</p>
                            </div>
                        ))}
                    </div> */}
                
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
    </>
  )
}

export default SelectedPackage