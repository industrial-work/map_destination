import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="parent_about">
        <div className="first-child-about">
          <h1>About Us</h1>
          <p>
            Our company offers a wide range of travel services, including
            customized tours, adventure travel, cultural immersion experiences,
            and more. We believe that every traveller is unique, and we work
            closely with our customers to create personalized itineraries that
            meet their individual needs and interests <br />
            <br />
            We strive to provide our customers with unique and authentic travel
            opportunities that allow ther to connect with people and places in a
            meaningful way. Our team of experienced travel experts are
            passionate about exploring the world and sharing their knowledge
            with our customers. We are committed to providing exceptional
            service and helping our customers create memories that will last a
            lifetime <br />
            <br />
            Our company is dedicated to responsible and sustainable travel
            practices. We believe in leaving a positive impact on the
            communities and environments we visit
          </p>
        </div>
        <img src="./images/car.png" alt="car-img" />
      </div>
    </>
  );
};
export default About;
