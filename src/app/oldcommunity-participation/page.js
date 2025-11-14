import React from 'react'
import CommunityParticipationOld from '@/app/Components/ComunityParticipationOld/ComunityParticipationOld'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/CommunityOldBanner.jpg'

export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={" Home / Old Aged Community Participation"}/>
        <CommunityParticipationOld/>
    </div>
  )
}
