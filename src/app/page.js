import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import GetStarted from '@/app/Components/GetStarted/GetStarted'
import ServicesSection from "./Components/Services/Services";
import OurPlans from "./Components/OurPlans/OurPlans";
import Testimonial from "./Components/Testimonial/Testimonial";
import Prestigious from "./Components/Prestigious/Prestigious";
import EventsSection from "./Components/EventSection/EventSection";



export default function Home() {
  return (
   <>
   
   <Navbar/>
   <HeroSection/>
    <GetStarted/>
    <ServicesSection/>
    <OurPlans/>
    <EventsSection/>
    <Prestigious/>
    <Testimonial/>
   <Footer/>
   
   </>
  );
}
