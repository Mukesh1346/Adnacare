import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/AlliedHealth.jpg'
import Pic2 from '@/app/images/AlliedHealth2.jpg'
import './health.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function AlliedHealth() {
    return (
        <>
            <div className='AlliedHealthMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="AlliedHealthLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='AlliedHealthImg' className='AlliedHealthImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="AlliedHealthRightSec">
                                <div className='AlliedHealthTextSec'>
                                    <h2 className='AlliedHealthTitle'>Comprehensive Allied Health Services at Adna Care</h2>

                                    <p className='AlliedHealthSubTitle'>At Adna Care, our qualified Allied Health professionals work collaboratively to understand your specific needs and provide tailored support that promotes recovery, strength, and overall wellbeing. We offer a wide range of evidence-based treatment methods designed to help restore, improve, and maintain optimal physical function and health.
                                    </p>
                                    <p className='AlliedHealthSubTitle'>

                                        ur Allied Health and physiotherapy services are flexible and convenient, designed to fit your lifestyle and schedule. We believe in building lasting patient clinician relationships, ensuring consistent, high-quality care every step of the way.
                                    </p>

                                    <p className='AlliedHealthSubTitle'>

                                        Our experienced physiotherapists and exercise physiologists can visit you at home, in your gym, or at a pool facility—wherever you feel most comfortable. If your condition or injury is work-related, our health professionals can also attend your workplace to provide thorough assessment and treatment.
                                    </p>

                                    <p>With Adna Care, you receive personalised, professional care that supports your recovery and helps you achieve long-term health goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='AlliedHealthMainSec'>
                <div className="container ">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="AlliedHealthRightSec">
                                <div className='AlliedHealthTextSec '>
                                    <h2 className='AlliedHealthTitle'>Our Allied Health Assistance Goals:</h2>

                                    <p className='AlliedHealthPara'>
                                        At Adna Care, we simply look forward to providing client-oriented care that brings all allied health together working towards the same goal. Our effective allied health plans are clinically proven with multiple benefits to every client, bringing together multi-disciplinary ideas on the client needs.

                                        Simply put, we get into the core of the health problems and find the root cause and then treat accordingly so that the client gets maximum benefits in quick time.

                                    </p>
                                    <div className='AlliedHealthList'>
                                        <b className='AlliedHealthSubTitle  mt-5'>

                                            Why Choose Adna Care for Allied Health Assistance Service

                                        </b>
                                        <ul>
                                            <li>NDIS registered health services</li>
                                            <li>Corporate health programs</li>
                                            <li> The professional and experienced health-care team</li>
                                            <li>Registered nurses</li>
                                            <li>Community-based rehabilitation and management</li>
                                            <li>Clinically proven plans treatment-methods</li>
                                            <li> Client-oriented service and flexible scheduling</li>
                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="AlliedHealthLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic2} alt='AlliedHealthImg' className='AlliedHealthImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <div  className='container'>
               <div className='d-flex  AlliedHealthContainer justify-content-around'>
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
            <FAQ/>
           </div>

           <div>
            <Testimonial/>
           </div>


        </>
    )
}
