import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/home1.jpg'
import './HomeModification.css'

export default function HomeModification() {
    return (
        <>
            <div className='HomeModificationMainSec mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="HomeModificationLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='HomeModificationImg' className='HomeModificationImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="HomeModificationRightSec">
                                <div className='HomeModificationTextSec'>
                                    <h2 className='HomeModificationTitle'>
                                        Home Modifications and Supported Living Services
                                    </h2>

                                    <p className='HomeModificationSubTitle'>
                                        OSAN Ability Assist provides supported living services to support people with disabilities who are living in their own home or living with others. We understand the need to have some modifications in your house to ensure that safety is never compromised. Home modifications are changes to the structure, layout or fittings of a participant’s home so they safely access it and move around comfortably in areas they frequently use.
                                    </p>

                                    <ul className='HomeModificationSubTitle'>
                                        <li>Installation of ramps, steps, lifts, stair climbers, and other access modifications to improve the safety and accessibility of your home.</li>
                                        <li>Installation of handrails, grab rails, widening of doorways, lever taps, hand held shower hoses, and other minor modifications to improve the ease and convenience of living in your home.</li>
                                        <li>Bathroom and toilet modifications, including bathroom renovations.</li>
                                        <li>Kitchen modifications.</li>
                                        <li>Specialist Disability Accommodation.</li>
                                    </ul>

                                    <p className='HomeModificationSubTitle'>
                                        Our occupational therapists can assess your home and prescribe equipment and modifications tailored to your specific needs, with your safety and independence in mind. Our tradespeople are fully qualified, insured, and licensed professionals experienced in home modifications and renovations.
                                    </p>

                                    <p className='HomeModificationSubTitle'>
                                        Contact us and we can talk about necessary home modifications for your home.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
