import React from 'react'

import Header from '../Components/Header/Header'
import pic1 from '@/app/images/Domestic-Assistance1.jpg'
import Testimonial from '../Components/Testimonial/Testimonial'
import GetStarted from '@/app/Components/GetStarted/GetStarted'
import DomesticOld from '../Components/DomesticAssitanceOld/DomesticOld'

export default function page() {
  return (
    <div>
     <Header subtitle={"Sunnyaid / Domestic Support"} Banner={pic1}/>
      <DomesticOld/>
      <GetStarted/>
      <Testimonial/>
    </div>
  )
}
