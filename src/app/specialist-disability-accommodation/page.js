import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Accomodation.jpg'
import './SpecialistAccommodation.css'
import Header from '../Components/Header/Header'
import Banner from '@/app/images/Short-Medium-Accomodation.jpg'

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
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="p-4 p-md-5 bg-light rounded shadow-sm">
                                    <h3 className="fw-bold mb-3 text-center">Have Questions? Lets Talk</h3>
                                    <p className="text-center mb-4 small">
                                        We are here to help you navigate your needs and support options.
                                    </p>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Full Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                            <div className="col-md-12">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
                                                    Enquire Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center mt-3 fw-semibold">Call 1300 799 941</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
