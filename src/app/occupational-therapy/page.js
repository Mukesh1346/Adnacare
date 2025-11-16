import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Occupational-Therapy1.jpg'
import OccupationalTherapy from '../Components/Occupational Therapy/OccupationalTherapy'
import Testimonial from '../Components/Testimonial/Testimonial'

export default function page() {
  return (
    <div>
      <Header Banner={Banner} subtitle={"Occupational Therapy"}/>
      <OccupationalTherapy/>
      <Testimonial/>
    </div>
  )
}
