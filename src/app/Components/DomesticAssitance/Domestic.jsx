import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Domestic.jpg'
import './domestic.css'

export default function Domestic() {
    return (
        <>
            <div className='DomesticMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="DomesticLeftSec">
                                <div className='DomesticImageSec'>
                                    <Image src={Pic1} alt='DomesticImg' className='DomesticImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="DomesticRightSec">
                                <div className='DomesticTextSec'>
                                    <h2 className='DomesticTitle'>Discover the Power of Inclusion: NDIS Community Participation</h2>

                                    <p className='DomesticSubTitle'>Adna Care in Sydney offers transformative NDIS Community Participation programs, empowering individuals with disabilities to thrive in their local communities. Through diverse activities and personalised support, Adna Care promotes social inclusion, skill-building, and personal growth. Our holistic approach ensures every participant enjoys meaningful engagement and opportunities to contribute, fostering independence and enhancing quality of life. Adna Care is dedicated to creating inclusive spaces where individuals can explore their potential and forge lasting connections within the community.
                                    </p>
                                    <p className='DomesticSubTitle'>

                                        We understand that you might feel the need to belong to a community and feel connected to people of your age. It is important for all social beings to interact within the community to improve their mental health and have an optimistic approach towards life. At Adna Care, we have a vision of forming different communities within our group of clients with a range of community & social participation programs focused on empowering disabled persons. It can be incredibly hard and demotivating but these social activities can be beneficial and fulfilling.
                                    </p>

                                    <p className='DomesticSubTitle'>
                                        We can help you feel connected to the community as it is one of the most important parts for all people with disability for both their physical & emotional well-being. Thats why Adna Care Assist provides a range of community & social participation program
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
