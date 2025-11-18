import React from 'react'
import SupportCondition from '../Components/SupportCondition/SupportCondition'
import Header from '../Components/Header/Header'
import pic1 from '@/app/images/SupportBanner.jpg'
import EventsSection from '../Components/EventSection/EventSection'
import Testimonial from '../Components/Testimonial/Testimonial'
import InquiryForm from '../Components/InquiryForm/InquiryForm'




export default function page() {
  return (
    <>
  <Header subtitle={"Adna Care  /Support Provider"} Banner={pic1}/>
       <SupportCondition/>
       <EventsSection/>
       <InquiryForm/>
       <Testimonial/>

    </>
  )
}
