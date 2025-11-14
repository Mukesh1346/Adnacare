import React from 'react'
import CommunityParticipation from '../Components/ComunityDetails/ComunityDetails'
import Header from '../Components/Header/Header'
import Banner1 from '@/app/images/Comunity2.jpg'
import Testimonial from '../Components/Testimonial/Testimonial'

export default function page() {
  return (
    <div>
        <Header Banner={Banner1} subtitle={" Home   / Comunity Participation"}/>
        <CommunityParticipation/>
        <Testimonial/>
    </div>
  )
}
