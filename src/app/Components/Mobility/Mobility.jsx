import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Mobility1.jpg'
import './mobility.css'

export default function Mobility() {
    return (
        <>
            <div className='MobilityMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="MobilityLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='MobilityImg' className='MobilityImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="MobilityRightSec">
                                <div className='MobilityTextSec'>
                                    <h2 className='MobilityTitle'>Discover the Power of Inclusion: NDIS Community Participation</h2>

                                    <p className='MobilitySubTitle'>Adnacare support services in Sydney offers transformative NDIS Community Participation programs, empowering individuals with disabilities to thrive in their local communities. Through diverse activities and personalised support, Adnacare support services promotes social inclusion, skill-building, and personal growth. Our holistic approach ensures every participant enjoys meaningful engagement and opportunities to contribute, fostering independence and enhancing quality of life. Adnacare support services is dedicated to creating inclusive spaces where individuals can explore their potential and forge lasting connections within the community.
                                    </p>
                                    <p className='MobilitySubTitle'>

                                        We understand that you might feel the need to belong to a community and feel connected to people of your age. It is important for all social beings to interact within the community to improve their mental health and have an optimistic approach towards life. At Adnacare support services, we have a vision of forming different communities within our group of clients with a range of community & social participation programs focused on empowering disabled persons. It can be incredibly hard and demotivating but these social activities can be beneficial and fulfilling.
                                    </p>

                                    <p className='MobilitySubTitle'>
                                        We can help you feel connected to the community as it is one of the most important parts for all people with disability for both their physical & emotional well-being. Thats why Adnacare support services Assist provides a range of community & social participation program
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
