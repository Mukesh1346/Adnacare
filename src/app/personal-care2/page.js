import React from 'react'
import PersonalCare from '../Components/PersonalCare/PersonalCare'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/PersonalCareChild.jpg'

export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={"Home / Personal Care "}/>
       <PersonalCare/>
    </div>
  )
}
