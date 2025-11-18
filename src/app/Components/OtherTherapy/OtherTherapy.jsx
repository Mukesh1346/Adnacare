import Image from 'next/image'
import React from 'react'
import Pic2 from '@/app/images/OtherTherapy2.jpg'
import Pic3 from '@/app/images/OtherTherapy3.jpg'
import Pic4 from '@/app/images/OtherTherapy4.jpg'
import './OtherTherapy.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'
import InquiryForm from '../InquiryForm/InquiryForm'

export default function OtherTherapy() {
  return (
    <>
      <div className='OtherTherapyMainSec'>
        <div className="container">

          {/* <p>Our professional Occupational Therapists at Adna Care Assist have always focused on promoting health and wellbeing by encouraging the therapy-seekers engaging in the self-care activities. These activities include day-to-day activities such as dressing, showring, cooking; productive activities like work, volunteering and caring for others; and social activities such as being part of a community group, engaging in a hobby or being part of a friendship group.
            Our team of Occupational therapists play an important role in enabling people with disability to identify and implement methods that support their participation in occupations. This may include modifying an activity or an environment.</p> */}

          <div className="row">
            <div className="col-md-6">
              <div className="OtherTherapyLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic2} alt='OtherTherapyImg' className='OtherTherapyImg' />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="OtherTherapyRightSec">
                <div className='OtherTherapyTextSec'>
                  <h2 className='OtherTherapyTitle'>Exercise physiology</h2>

                  <p className='OtherTherapySubTitle'>
                    OSAN Assist is a registered provider of Exercise under the National Disability Insurance Scheme (NDIS). As with all our services, the ones who seek our services under the NDIS are provided with care that is in line with their goals, to help them to achieve what is important to them. With experience in physical, intellectual, neurological and mental disability, the physiotherapists and Exercise Physiologists are able to assist those with a disability live a life enriched by better movement. We accept participants who are plan-managed and self-managed.
                  </p>
                  <p>Our professional Occupational Therapists at Adna Care Assist have always focused on promoting health and wellbeing by encouraging the therapy-seekers engaging in the self-care activities. These activities include day-to-day activities such as dressing, showring, cooking; productive activities like work, volunteering and caring for others; and social activities such as being part of a community group, engaging in a hobby or being part of a friendship group.
                  Our team of Occupational therapists play an important role in enabling people with disability to identify and implement methods that support their participation in occupations. This may include modifying an activity or an environment.</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='OtherTherapyMainSec'>
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="OtherTherapyRightSec">
                <div className='OtherTherapyTextSec '>
                  <h2 className='OtherTherapyTitle'> Aged Care Services</h2>

                  <p className='OtherTherapyPara'>

                    Speech Therapy
                    Speech and language therapy is a process that enables people to communicate to the best of their ability. Speech therapists are often found working in hospitals, schools, community health centres, private practice and clinics. With the recent exertion of the NDIS (National Disability Insurance Scheme) across Australia, there has been a sharp rise in new services being established for various allied health streams, including speech therapy. The NDIS funds supports that are directly connected to your goals so if you want to obtain funding for speech therapy, it is important to include related goals in your NDIS Plan. At Adna Care Assist, you can find out more about this service.

                  </p>


                  <div className='OtherTherapyList'>

                    <p>
                      We are here to provide you with the highest quality disability support services that are tailored to your individual needs. Adna Care has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.

                      We are here to provide you with the highest quality disability support services that are tailored to your individual needs. Adna Care has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.
                    </p>

                  </div>




                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="OtherTherapyLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic3} alt='OtherTherapyImg' className='OtherTherapyImg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <div className="OtherTherapyRightSec">
              <div className='OtherTherapyTextSec '>
                <h2 className='OtherTherapyTitle'> Psychology</h2>




                <div className='OtherTherapyList'>

                  <p>


                    The NDIS provides services to help people up until the age of 65 years old, thus many Australians can avail of psychological input and assistance if psychology is identified as a need or goal by them.The category that this service falls under is the ‘Capacity building class of supports.
                    An NDIS psychologist performs a professional, therapeutic role in their client’s life and can offer advice, support and therapeutic interventions to facilitate people and their families to better handle hardships and difficulties in their lives.A psychologist does not set out to merely dictate how a person should manage their problems, however they provide guidance and assist them to acknowledge, accept and deal with their problematic emotions or behaviours.A psychologist aims to support their client to make healthier decisions in their own life, and how to reduce or eliminate habits and behaviours that are often unhelpful or negatively impact on the persons well - being.
                  </p>

                </div>




              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="OtherTherapyLeftSec">
              <div className='ImageSec'>
                <Image src={Pic4} alt='OtherTherapyImg' className='OtherTherapyImg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      <InquiryForm/>
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

















