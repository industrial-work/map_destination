// import Header from '../Header/Header'
import Pakages from "../Header/Pakages/Pakages";
import OfferSlider from "./OfferSection/OfferSlide";
import DealSlider from "./DealSection/DealSlide";
import Feature from "./Feature/Feature";
import OurServices from "./OurServices/OurServices";
import Testimonial from "./Testimonial/Testimonial";
import About from "./About/About";
import Footer from "../Footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Pakages />
      <OfferSlider />
      <DealSlider />
      <Feature />
      <OurServices />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default Home;
