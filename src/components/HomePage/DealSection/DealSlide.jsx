import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./dealslide.css"

function DealSlide() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        draggable={false}
        ssr={true}
        removeArrowOnDeviceType={ ["mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
    <div className="slider2-main">
        <div className="first">
            <div className="top">
                <h5>Kashmir Delight</h5>
                <span>6N/7D</span>
            </div>
            <div className="bottom-inside">
                <img src="./images/image-c.jpeg" alt="" />
            </div>
        </div>
        <div className="bottom">
            <button>View Details</button>
        </div>
    </div>
    <div className="slider2-main">
        <div className="first">
            <div className="top">
                <h5>Kashmir Delight</h5>
                <span>6N/7D</span>
            </div>
            <div className="bottom-inside">
                <img src="./images/image-c.jpeg" alt="" />
            </div>
        </div>
        <div className="bottom">
            <button>View Details</button>
        </div>
    </div>
    <div className="slider2-main">
        <div className="first">
            <div className="top">
                <h5>Kashmir Delight</h5>
                <span>6N/7D</span>
            </div>
            <div className="bottom-inside">
                <img src="./images/image-c.jpeg" alt="" />
            </div>
        </div>
        <div className="bottom">
            <button>View Details</button>
        </div>
    </div>
    <div className="slider2-main">
        <div className="first">
            <div className="top">
                <h5>Kashmir Delight</h5>
                <span>6N/7D</span>
            </div>
            <div className="bottom-inside">
                <img src="./images/image-c.jpeg" alt="" />
            </div>
        </div>
        <div className="bottom">
            <button>View Details</button>
        </div>
    </div>
</Carousel>
    </>
  )
}

export default DealSlide