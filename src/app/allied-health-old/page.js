import React from 'react'

import Header from '../Components/Header/Header'
import Banner from '@/app/images/Allied-Health-Care-Old.jpg'
import AlliedHealthOld from '../Components/AlliedHealthOld/AlliedHealthOld'


export default function page() {
  return (
    <div>
        <Header Banner={Banner} subtitle={"AlliedHealth Old"}/>
          <AlliedHealthOld/>
    </div>
  )
}
