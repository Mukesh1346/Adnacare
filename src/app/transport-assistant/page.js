import React from 'react'
import TransportAssistant from '../Components/TransportAssistant/TransportAssistant'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Banner3.jpg'
import FAQ from '../Components/FAQ/FAQ'

export default function page() {
  return (
    <div>
        <Header Banner={Banner}  subtitle={" Home /Transport Assistant"}  />
      <TransportAssistant/>
      <FAQ/>
    </div>
  )
}
