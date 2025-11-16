import React from 'react'

import Header from '../Components/Header/Header'
import Pic1 from '@/app/images/Mobility.jpg'
import Testimonial from '../Components/Testimonial/Testimonial'
import EventsSection from '../Components/EventSection/EventSection'
import MobilityOld from '../Components/MobilityOld/MobilityOld'

export default function page() {
  return (
    <div>
        <Header subTitle={"Mobility Equipment Sydney"} Banner={Pic1}/>
       <MobilityOld/>
        <EventsSection/>
        <Testimonial/>

    </div>
  )
}
