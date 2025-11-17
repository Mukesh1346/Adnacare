import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/AlliedHealthOld1.jpg'
import Pic2 from '@/app/images/AlliedHealthOld2.jpg'
import './health.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function AlliedHealthOld() {
    return (
        <>
            <div className='AlliedHealthOldMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="AlliedHealthOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='AlliedHealthOldImg' className='AlliedHealthOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="AlliedHealthOldRightSec">
                                <div className='AlliedHealthOldTextSec'>
                                    <h2 className='AlliedHealthOldTitle'>Allied Health Care
                                        for Elderly</h2>

                                    <p className='AlliedHealthOldSubTitle'>Our Allied Health Care professionals work as a team to take a closer look at what you actually need. We cater to the hectic lifestyle of our patients. Our physiotherapists and physiologists are more than happy to visit you at home or at your gym or pool facility – whatever suits you best. Moreover, if your injury is work-related, we are also able to attend your workplace for assessment and treatment.
                                    </p>
                                    <p className='AlliedHealthOldSubTitle'>

                                        At OSAN Ability Assist, our Allied Health Assistance professionals work as a team to take a closer look at what the participants actually need. We offer a wide range of treatment methods to help restore, increase and maintain optimal physical function and general well-being.
                                    </p>

                                    <p className='AlliedHealthOldSubTitle'>

                                        All our health care services for elderly are quite convenient and scheduled following the hectic lifestyle of the participants. This helps in maintaining a steady patient-health care relationship. Our physiotherapists and physiologists are professionally trained and they are more than happy to visit you at home or at your gym or pool facility  whatever suits you the best.
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='AlliedHealthOldMainSec'>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="AlliedHealthOldRightSec">
                                <div className='AlliedHealthOldTextSec '>
                                    <h2 className='AlliedHealthOldTitle'> Allied Health Assistance Goals:</h2>

                                    <p className='AlliedHealthOldPara'>

                                        At OSAN Ability Assist, we simply look forward to providing client-oriented care that brings all allied health together working towards the same goal. Our effective allied health plans are clinically proven with multiple benefits to every client, bringing together multi-disciplinary ideas on the client needs.
                                        Simply put, we get into the core of the health problems and find the root cause and then treat accordingly so that the client gets maximum benefits in quick time.
                                    </p>
                                    <div className='AlliedHealthOldList'>
                                        <b className='AlliedHealthOldSubTitle  mt-5'>
                                            Why Choose OSAN Ability
                                        </b>
                                        <ul>
                                            <li>MyAgedCare-funded health services</li>
                                            <li>The professional and experienced healthcare team</li>
                                            <li>Registered nurses</li>
                                            <li>Community-based rehabilitation and management</li>
                                            <li>Clinically proven plans treatment methods</li>
                                            <li>Client-oriented service and flexible scheduling</li>
                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="AlliedHealthOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic2} alt='AlliedHealthOldImg' className='AlliedHealthOldImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container '>
                <div className='d-flex  AlliedHealthlist justify-content-around'>
                    <div>
                        <b>Our Allied Health Services Include:</b>
                        <ul>
                            <li> Physiotherapy</li>
                            <li>Occupational Therapy</li>
                            <li>Speech Pathology</li>
                            <li>Exercise physiology</li>
                            <li>Dietetics</li>
                            <li>Podiatry</li>
                            <li>Psychology</li>
                            <li>Remedial Therapy</li>
                            <li>Diabetes Care</li>
                            <li>Fitness Consultation</li>
                        </ul>
                    </div>
                    <div>
                        <b>Our Allied Health Care services professionally treat a range of physical and mental health problems, which include:</b>
                        <ul>
                            <li>Osteoporosis</li>
                            <li>Osteoarthritis/ rheumatoid arthritis</li>
                            <li>Cardiovascular conditions/ diseases</li>
                            <li>Neurological disease/disorders</li>
                            <li>Anxiety, Stress and Depression</li>
                            <li>Diabetes</li>
                            <li>Womens health and wellbeing</li>
                            <li>Sport injury</li>
                            <li>Weight gain/obesity</li>
                        </ul>

                    </div>
                </div>

            </div>



            <div>
                <FAQ />
            </div>

            <div>
                <Testimonial />
            </div>


        </>
    )
}
