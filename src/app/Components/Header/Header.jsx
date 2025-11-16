import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/images/heroBanner.jpg'

import './header.css'


export default function Header(props) {
  return (
    <>
      <section>
      <div className='HeaderMainSec'>
        <Image src={props.Banner} alt="BannerImg" className='BannerImg' />
        <div className='overlayHeaderText'>
           <h2 className='text-stroke'>Therapeutic Support</h2>
            <span className='text-strokePara'>{props.subtitle}</span> 
        </div>
      </div>
      </section>
    </>
  )
}
