import React from 'react'
import Header from '../Components/Header/Header'
import Comunity from '../Components/ComunityParticipation/ComunityParticipation'
import CommunityParticipation from '../Components/ComunityDetails/ComunityDetails'
import pic1 from '@/app/images/heroBanner.jpg'

export default function page() {
  return (
    <div>
      <Header subtitle={"Sunnyaid / Therapeutic Support"} Banner={pic1}/>
      <Comunity/>
      <CommunityParticipation/>
    </div>
  )
}
