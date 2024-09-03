import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

function TestimonialCard() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Carousel className="slider" responsive={responsive}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        draggable={false}
        ssr={true}
        removeArrowOnDeviceType={ ["mobile"]}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
        >
            <div className="testimonial-carousel carousel-action owl-carousel">  
                <div className="testimonial-card">
            <div className="testi-desc-box">
                2MD - Map My Destination is my go-to travel agency for all of my trips to Goa. They're always able to find me the best deals on flights, hotels, and activities. And their customer service is top-notch. I highly recommend them to anyone looking for a reliable and affordable travel agency for their trip to Goa.
            </div>
            <div className="author-content d-flex align-items-center">
              {/* <div className="author-img"> */}
                <img src="https://www.mapmydestination.com/public/testimonial_images/20240122083650_iNkUmxF93gLV5oqyNBZ5.jpg" alt="testimonial image" />
              {/* </div> */}
              <div className="author-bio">
                <h4 className="author__title">Vikas Mathur</h4>
                <span className="ratings d-flex align-items-center">
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                </span>
              </div>
            </div>
          </div>           
        </div>
            <div className="testimonial-carousel carousel-action owl-carousel">  
                <div className="testimonial-card">
            <div className="testi-desc-box">
                2MD - Map My Destination is my go-to travel agency for all of my trips to Goa. They're always able to find me the best deals on flights, hotels, and activities. And their customer service is top-notch. I highly recommend them to anyone looking for a reliable and affordable travel agency for their trip to Goa.
            </div>
            <div className="author-content d-flex align-items-center">
              {/* <div className="author-img"> */}
                <img src="https://www.mapmydestination.com/public/testimonial_images/20240122083650_iNkUmxF93gLV5oqyNBZ5.jpg" alt="testimonial image" />
              {/* </div> */}
              <div className="author-bio">
                <h4 className="author__title">Vikas Mathur</h4>
                <span className="ratings d-flex align-items-center">
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                  <i className="la la-star"></i>
                </span>
              </div>
            </div>
          </div>           
        </div>


    </Carousel>
        
    </>
  )
}

export default TestimonialCard