import React from "react";
import "./OurServices.css";
import { Link } from "react-router-dom";

function OurServices(props) {
  return (
    <>
      <div className="parent_services">
        <div className="services-heading">
          <h4>{props.name}</h4>
          <h2>Our Best Services For You</h2>
          <div className="service-heading-divider"></div>
        </div>
        <div className="services-main-card">
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
          <div className="service-card">
            <img src="./images/image-c.jpeg" alt="img" />
            <h3>City Transport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              error facere ipsum...
            </p>
            <Link to="/services/individual">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
