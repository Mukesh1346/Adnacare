import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Transportation-AssistanceOld.jpg'
import FAQ from '../Components/FAQ/FAQ'
import TransportAssistantOld from '../Components/TransportAssistantOld/TransportAssistantOld'

export default function page() {
  return (
    <div>
        <Header Banner={Banner}  subtitle={" Home /Transport Assistant"}  />
      <TransportAssistantOld/>
      <FAQ/>
    </div>
  )
}
