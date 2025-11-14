import React from 'react'
import PersonalCare1 from '../Components/PersonalCare1/PersonalCare1'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/PersonalCare.jpg'

export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={"Home / Personal Care"}/>
       <PersonalCare1/>
    </div>
  )
}
