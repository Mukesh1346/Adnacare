import React from 'react'
import Header from '../Components/Header/Header'
import DisabilitySupport from '../Components/DisabilityCare/DisabilityCare'
import pic1 from '@/app/images/DisabilityBanner.jpg'


export default function page() {
  return (
    <div>
       <Header subtitle={"Sunnyaid / Disability Support"} Banner={pic1} />
         <DisabilitySupport/>
    </div>
  )
}
