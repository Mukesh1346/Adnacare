import React from 'react'
import Physiotherapy from '../Components/Physiotherapy/Physiotherapy'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Physiotherapy.jpg'
import Testimonial from '../Components/Testimonial/Testimonial'

export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={"Physiotherapy"}/>
       <Physiotherapy/>
       <Testimonial/>
    </div>
  )
}
