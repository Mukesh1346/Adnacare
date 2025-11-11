import React from 'react'
import HomeModification from '../Components/HomeModification/HomeModification'
import Header from '../Components/Header/Header'
import Testimonial from '../Components/Testimonial/Testimonial'
import Pic1 from '@/app/images/home.jpg'

export default function page() {
  return (
    <>
    <Header Banner={Pic1} subtitle={" HomeModification"} />
      <HomeModification/>
      <Testimonial/>
    </>
  )
}
