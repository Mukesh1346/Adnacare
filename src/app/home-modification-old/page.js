import React from 'react'

import Header from '../Components/Header/Header'
import Testimonial from '../Components/Testimonial/Testimonial'
import Pic1 from '@/app/images/HomeModificationOld1.jpg'
import HomeModificationOld from '../Components/HomeModificationOld/HomeModificationOld'

export default function page() {
  return (
    <>
    <Header Banner={Pic1} subtitle={" HomeModification"} />
      <HomeModificationOld/>
      <Testimonial/>
    </>
  )
}
