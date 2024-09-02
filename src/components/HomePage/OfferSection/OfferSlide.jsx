import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './offerslide.css' 


function OfferSlide() { 
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
        showDots={true}
        autoPlay={false}
        autoPlaySpeed={1500}
        infinite={true}
        draggable={false}
        ssr={true}
        removeArrowOnDeviceType={ ["mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
  <div className="main-slider"> 
    <img className="img-s" src="./images/image-c.jpeg" alt="img" /> 
    <div className="writes"> <div className="heading-s"> 
      <h4>Flat 20% Off on Kashmir Packages</h4> 
      </div> <div> <h5>*Offer starting from 15th April </h5> 
      </div> <div className="btn-s"> 
        <button>Book Now</button> 
        </div> 
        </div> 
        </div>
  <div className="main-slider"> 
    <img className="img-s" src="./images/image-c.jpeg" alt="img" /> 
    <div className="writes"> <div className="heading-s"> 
      <h4>Flat 20% Off on Kashmir Packages</h4> 
      </div> <div> <h5>*Offer starting from 15th April </h5> 
      </div> <div className="btn-s"> 
        <button>Book Now</button> 
        </div> 
        </div> 
        </div>
  <div className="main-slider"> 
    <img className="img-s" src="./images/image-c.jpeg" alt="img" /> 
    <div className="writes"> <div className="heading-s"> 
      <h4>Flat 20% Off on Kashmir Packages</h4> 
      </div> <div> <h5>*Offer starting from 15th April </h5> 
      </div> <div className="btn-s"> 
        <button>Book Now</button> 
        </div> 
        </div> 
        </div>
</Carousel>
        
    </> ) }
  export default OfferSlide