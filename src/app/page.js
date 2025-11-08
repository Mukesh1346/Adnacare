import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import GetStarted from '@/app/Components/GetStarted/GetStarted'



export default function Home() {
  return (
   <>
   
   <Navbar/>
   <HeroSection/>
    <GetStarted/>
   <Footer/>
   
   </>
  );
}
