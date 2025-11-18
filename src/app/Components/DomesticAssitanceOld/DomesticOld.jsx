import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Domestic.jpg'
import './domesticOld.css'

export default function DomesticOld() {
    return (
        <>
            <div className='DomesticOldMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="DomesticOldLeftSec">
                                <div className='DomesticOldImageSec'>
                                    <Image src={Pic1} alt='DomesticOldImg' className='DomesticOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="DomesticOldRightSec">
                                <div className='DomesticOldTextSec'>
                                    <h2 className='DomesticOldTitle'>Discover the Power of Inclusion: NDIS Community Participation</h2>

                                    <p className='DomesticOldSubTitle'>At Adna Care Assist, we offer Domestic assistance service to elderly people. Here we carry out all manner of domestic tasks around the home that disabled & aged people may find hard to perform. These may be basic jobs like taking out the rubbish, or a more comprehensive clean of the whole house. Either way, the end goals are the same – to make day to day life more enjoyable and to minimise the risks associated with a cluttered, untidy home.


                                    </p>

                                    <p className='DomesticOldSubTitle'>
                                        We look forward to make the lives of aged persons and people with disability easier & more liveable by giving them our helping hand.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="DomesticOldRightSec">
                                <div className='DomesticOldTextSec'>
                                    <h2 className='DomesticOldTitle'>Dour Domestic assistance services include:</h2>

                                    <ul>
                                        <li>Taking out the rubbish</li>
                                        <li>Cleaning the kitchen</li>
                                        <li>Cleaning the bathroom</li>
                                        <li>General cleaning</li>
                                        <li>Vacuuming or mopping</li>
                                        <li>Making sure food in the fridge and pantry is current</li>
                                        <li>Sweeping outdoor areas</li>
                                        <li>Tidying paths and steps</li>
                                        <li>Watering plants/Gardening</li>
                                        <li>Feeding a pet</li>
                                        <li>Looking for domestic assistance services, please Contact us for more information</li>

                                    </ul>

                                </div>
                            </div>
                                
                        </div>
                        <div className="col-md-6">
                                    <div className="DomesticOldLeftSec">
                                        <div className='DomesticOldImageSec'>
                                            <Image src={Pic1} alt='DomesticOldImg' className='DomesticOldImg' />
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </>
    )
}










