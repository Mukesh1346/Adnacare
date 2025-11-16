import React from 'react'
import Header from '../Components/Header/Header'
import OtherTherapy from '../Components/OtherTherapy/OtherTherapy'
import Testimonial from '../Components/Testimonial/Testimonial'
import Banner from '@/app/images/Other-Therapy1.jpg'

export default function page() {
  return (
    <div>
      <Header Banner={Banner} subtitle={"Other Therapy"}/>
      <OtherTherapy/>
      <Testimonial/>
    </div>
  )
}
