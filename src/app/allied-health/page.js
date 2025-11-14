import React from 'react'
import AlliedHealth from '../Components/AlliedHealth/AlliedHealth'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Banner2.jpg'

export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={"AlliedHealth"}/>
       <AlliedHealth/>
    </div>
  )
}
