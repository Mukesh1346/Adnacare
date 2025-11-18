import React from 'react'
import Header from '../Components/Header/Header'
import pic1 from '@/app/images/Disability-care-old.jpg'
import DisabilityCareOld from '../Components/DisabilityCareOld/DisabilityCareOld'


export default function page() {
  return (
    <div>
       <Header subtitle={"Adna Care  / Old Aged Disability Support"} Banner={pic1} />
      <DisabilityCareOld/>
    </div>
  )
}
