import Image from 'next/image'
import React from 'react'
import Banner1 from '@/app/images/Banner1.png'
import './HeroSection.css'
import { FaArrowRight } from "react-icons/fa6";
import icon1 from '@/app/images/icon.png'
import icon2 from '@/app/images/icon1.png'

export default function HeroSection() {
    return (
        <div className='MainHeroSection'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 HeroLeftMainSec'>
                        <div className="leftSecHero">
                            <div className="leftMainSec">
                                <div className='HeroTopHeading'>
                                    <h2>We Provide Disability Services & in Home Aged Care Services</h2>
                                </div>
                                <div className='HeroSubTitle'>
                                    <p>We're here for every step of your NDIS journey, ensuring you & providing personalized care and support to help you thrive.</p>
                                </div>

                                <div className='d-flex  buttonSec'>
                                    <button className='BookBtn'>Book An Appointment <FaArrowRight /></button>
                                    <button className='AboutBtn'>About Us  <FaArrowRight className='text-light' /></button>
                                </div>

                                <div className=' iconSection  d-flex'>
                                    <div className='d-flex iconBox1'>
                                        <Image src={icon1} className='icon' alt='icon1' />
                                        <div className='Icontext'>
                                            <h2>220+</h2>
                                            <p>Expert Team Member</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex iconBox2'>
                                            <Image src={icon2} className='icon' alt='icon1' />
                                            <div className='Icontext'>
                                                <h2>98%</h2>
                                                <p>client satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="RightSecHero">
                            <Image src={Banner1} className='RightSecImg' alt='RightSecImg' />
                        </div>
                    </div>

                </div>

            </div>
            <div className="RequestCallBack">
    <div className="container">
        <h3 className="text-light fw-4">Request Call Back</h3>

        <div className="row formRow">

            {/* NAME */}
            <div className="col-md-6 formGroup text-light">
                <label>Name *</label>
                <input type="text" className="form-control" placeholder="Name" />
            </div>

            {/* PHONE */}
            <div className="col-md-6 formGroup text-light">
                <label>Phone *</label>
                <input type="text" className="form-control" placeholder="Phone Number" />
            </div>

            {/* EMAIL */}
            <div className="col-md-6 formGroup text-light">
                <label>Email *</label>
                <input type="email" className="form-control" placeholder="Email Address" />
            </div>

            {/* SERVICE */}
            <div className="col-md-6 formGroup text-light">
                <label>Service *</label>
                <input type="text" className="form-control" placeholder="Services" />
            </div>

            {/* MESSAGE */}
            <div className="col-md-12 formMessage text-light">
                <label>Message *</label>
                <input type="text" className="form-control" placeholder="Message" />
            </div>

        </div>
    </div>
</div>

        </div>
    )
}
