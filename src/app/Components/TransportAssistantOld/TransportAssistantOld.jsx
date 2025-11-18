import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Transportation-AssistanceOld1.jpg'
import Pic2 from '@/app/images/Transportation-AssistanceOld2.jpg'
import './transportAssistantOld.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function TransportAssistantOld() {
    return (
        <>
            <div className='TransportAssistantOldMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="TransportAssistantOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='TransportAssistantOldImg' className='TransportAssistantOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="TransportAssistantOldRightSec">
                                <div className='TransportAssistantOldTextSec'>
                                    <h2 className='TransportAssistantOldTitle'> Transportation Assistance</h2>

                                    <p className='TransportAssistantOldSubTitle'>We understand that sometimes our clients need our help in different ways. For instance, you may have a family member who would regularly drive you to or family visits or medical appointments, but you might get busy with work and other commitments.So we provide services that would help you We can also arrange taxi vouchers so that you can make your travel independently. Whatever your need, we can help you in the way that best suits you. Getting out and about is part of every persons daily life, whether you are planning a day out, doing your weekly shop or heading to a regular doctors appointment, feeling confident and safe is important.
                                    A little help to support you getting out and about tailored to suit your priorities and appointments, our transport services could be just the thing for you.
                                
                                    </p>
                                    <p className='TransportAssistantOldSubTitle'>
                                    This transport support is covered in the Assistance with Social and Community Participation funding in your NDIS plan. We will assist you with modified vehicles that are convenient for disabled people for their community participation transportation.
                                    </p>
                                    <h2 className='TransportAssistantOldTitle'>We can help you with disability transportation:</h2>
                                    <p className='TransportAssistantOldPara'>
                                    At Adna Care, we offer a safe, comfortable, and reliable transportation solution for individuals with disabilities. Our goal is to ensure that all members of our community can travel with ease and dignity. Here s what you can expect from our services:

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='TransportAssistantOldMainSec'>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="TransportAssistantOldRightSec">
                                <div className='TransportAssistantOldTextSec '>
                                   

                                   
                                    <div className='TransportAssistantOldList'>
                                        <b className='TransportAssistantOldSubTitle  mt-5'>

                                        We can help you with disability transportation:

                                        </b>
                                        <ul>
                                            <li>Wheelchair Accessible Vehicles: Equipped with ramps and securements for a smooth ride</li>
                                           <li>Trained and Caring Drivers: Our staffs are trained to assist passengers with various mobility needs.</li>
                                           <li>Flexible Scheduling: Convenient pickup times for appointments, social outings, and other needs.</li>
                                           <li>Door-to-Door Service: We pick you up and drop you off at your desired location.</li>
                                           <li>Personalised Support: We offer assistance tailored to your specific needs to ensure a comfortable and stress-free journey.</li>
                                           <li>Choose Adna Care for your transportation needs  bec</li>
                                        </ul>
                                    </div>

                                    <div className='TransportAssistantOldList'>
                                        <b className='TransportAssistantOldSubTitle  mt-5'>

                                        Our Disability Transportation services can help you with :

                                        </b>
                                        <ul>
                                            <li>                                       
                                            Out and about – transport to social gatherings, events and to visit family and friends</li>
                                            <li>Appointments – transport to medical and health appointments</li>
                                            <li>Errands around town – shopping trips and running errands</li>
                                            <li>Community – Supporting you with social outings</li>
                                            <li>Vehicles – Coordinating special vehicles to support your needs</li>
                                           





                                        </ul>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="TransportAssistantOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic2} alt='TransportAssistantOldImg' className='TransportAssistantOldImg' />
                                </div>
                            </div>
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


           <div>
            <FAQ/>
           </div>

           <div>
            <Testimonial/>
           </div>


        </>
    )
}
