import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/HomeModificationOld2.jpg'
import './HomeModificationOld.css'
import InquiryForm from '../InquiryForm/InquiryForm'

export default function HomeModificationOld() {
    return (
        <>
            <div className='HomeModificationOldMainSec mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="HomeModificationOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='HomeModificationOldImg' className='HomeModificationOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="HomeModificationOldRightSec">
                                <div className='HomeModificationOldTextSec'>
                                    <h2 className='HomeModificationOldTitle'>
                                        Home Modifications and Supported Living Services
                                    </h2>

                                    <p className='HomeModificationOldSubTitle'>
                                        Adnacare support services Assist provides supported living services to support people who are senior citizens living in their own home or living with others. We understand the need to have some modifications in your house to ensure that safety is never compromised. Home modifications are changes to the structure, layout or fittings of a participant s home so they safely access it and move around comfortably in areas they frequently use.
                                    </p>

                                    <ul className='HomeModificationOldSubTitle'>



                                        <li> Installation of ramps, steps, lifts, stair climbers, and other access modifications to improve the safety and accessibility of your home.</li>

                                        <li> Installation of ramps, steps, lifts, stair climbers, and other access modifications to improve the safety and accessibility of your home.</li>
                                        <li>Installation of handrails, grab rails, widening of doorways, lever taps, hand held shower hoses, and other minor modifications to improve the ease and convenience of living in your home.</li>
                                        <li>
                                            Bathroom and toilet modifications, including bathroom renovations
                                            Kitchen modifications</li>


                                    </ul>

                                    <p className='HomeModificationOldSubTitle'>
                                    Our occupational therapists can assess your home and prescribe equipment and modifications, tailored to your specific needs, with your safety and independence in mind. Our tradespeople are fully qualified, insured and licensed professionals, experienced in home modifications and renovations. Contact us and we can talk about necessary home modifications for your home.
                                    </p>

                                   
                                </div>
                            </div>
                        </div>
                    </div>

                 <div>
                  <InquiryForm/>
                 </div>
                </div>
            </div>
        </>
    )
}
