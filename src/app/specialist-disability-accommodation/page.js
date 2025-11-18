import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Accomodation.jpg'
import './SpecialistAccommodation.css'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Short-Medium-Accomodation.jpg'
import InquiryForm from '../Components/InquiryForm/InquiryForm'

export default function SpecialistAccommodation() {
    return (
        <>
           <Header Banner={Banner} subtitle={"Home Modifications and Supported Living Services"}/>


            <div className='SpecialistAccommodationMainSec mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="SpecialistAccommodationLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='SpecialistAccommodationImg' className='SpecialistAccommodationImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="SpecialistAccommodationRightSec">
                                <div className='SpecialistAccommodationTextSec'>
                                    <h2 className='SpecialistAccommodationTitle'>
                                        Home Modifications and Supported Living Services
                                    </h2>

                                    <p className='SpecialistAccommodationSubTitle'>
                                       Specialist Disability Accommodation (SDA) refers to accommodation for disabled people who require specialist housing solutions that cater to high support needs or extreme functional impairment. In this type of accommodation, clients with extreme and complex needs are provided with the support they require. If you live with a high level of disability, it can be really difficult to find a mainstream home that adequately meets all of your support needs. Participants who are eligible for SDA funding are those with extreme functional impairment or those who have very high support needs. This lack of suitable housing can have a flow-on effect, impacting your ability to take care of yourself, move around your home and perform daily tasks. It can also make it difficult for you to get out in the community and take part in activities that you enjoy.

 
                                    </p>

                                    <ul className='SpecialistAccommodationSubTitle '>



                                        <li>SDA will provide a small proportion of funding to the eligible NDIS participants with high support needs.

                                        </li>

                                        <li>SDA funding under the NDIS will stimulate investment in the development of new high-quality dwellings for use by eligible NDIS participants.</li>
                                        <li>At Adna Care Assist, all our homes are staffed 24/7 and provide access to a range of specialist services such as health, clinical and positive behaviour support.</li>

                                    </ul>
                       <b className='ThemeTitle'>Adna Care Assist offers a range of Specialised Disability Accommodation (SDA) properties across Sydney, New South Wales regional and metropolitan areas.</b>



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
