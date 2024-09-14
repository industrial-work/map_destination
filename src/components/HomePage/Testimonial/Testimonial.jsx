import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <>
      <section className="testimonial-area section-padding">
        <div className="containerr">
          <div className="site-heading text-center">
            <h2 className="site-title">What our clients say about us!</h2>
            <div className="service-heading-divider"></div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <img
                  src="https://www.mapmydestination.com/assets/frontend/img/testimonial_img.png"
                  className="test"
                />
                <p className="sec__desc padding-top-30px">
                  {" "}
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
