import React from 'react'
import Domestic from '../Components/DomesticAssitance/Domestic'
import Header from '../Components/Header/Header'
import pic1 from '@/app/images/domesticBanner.jpg'
import Testimonial from '../Components/Testimonial/Testimonial'
import GetStarted from '@/app/Components/GetStarted/GetStarted'

export default function page() {
  return (
    <div>
     <Header subtitle={"Adna Care  / Domestic Support"} Banner={pic1}/>
      <Domestic/>
      <GetStarted/>
      <Testimonial/>
    </div>
  )
}
