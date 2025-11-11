import React from 'react'
import SupportCondition from '../Components/SupportCondition/SupportCondition'
import Header from '../Components/Header/Header'
import pic1 from '@/app/images/SupportBanner.jpg'
import EventsSection from '../Components/EventSection/EventSection'
import Testimonial from '../Components/Testimonial/Testimonial'




export default function page() {
  return (
    <>
  <Header subtitle={"Sunnyaid /Support Provider"} Banner={pic1}/>
       <SupportCondition/>
       <EventsSection/>
       <Testimonial/>

    </>
  )
}
