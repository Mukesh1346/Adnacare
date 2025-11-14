import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/PersonalCareChild1.png'
import Pic2 from '@/app/images/PersonalCare1.jpg'
import './PersonalCare.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function PersonalCare() {
  return (
    <>
      <div className='PersonalCareMainSec'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="PersonalCareLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic1} alt='PersonalCareImg' className='PersonalCareImg' />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="PersonalCareRightSec">
                <div className='PersonalCareTextSec'>
                  <h2 className='PersonalCareTitle'>NDIS Personal Care services</h2>

                  <p className='PersonalCareSubTitle'>Disabled people are not from one group. Every disabled person has different health conditions and
                    challenges. This is something we recognise here at OSAN Ability, where we provide personalised care for the disabled. We make sure that you or your loved one would receive the care you need so that you can
                    live a happy and comfortable life.

                    We never provide a one-size-fits-all solution. Our service is entirely centered on you and your needs. Our team includes professional, experienced and devoted Disability Support Workers, Registered Nurses, and Assistants in Nursing, Occupational Therapists, Handymen and Garden crew, providing high quality services to our clients.

                  </p>
                  <p className='PersonalCareSubTitle'>
                    We understand that every persons requirements are different, which is why our approach to NDIS Personal Care is highly personalised. Whether its helping with bathing and dressing, administering medication, or supporting with toileting needs, our compassionate staff members are trained to deliver care with empathy and respect.


                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='PersonalCareMainSec'>
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="PersonalCareRightSec">
                <div className='PersonalCareTextSec '>
                  <h2 className='PersonalCareTitle'> Aged Care Services</h2>

                  <p className='PersonalCarePara'>
                    At OSAN Ability, we prioritise the comfort and well-being of our clients above all else. Our goal is not only to meet their immediate care needs but also to foster a supportive environment where they feel empowered and valued. By collaborating closely with participants and their support networks, we strive to create tailored care plans that promote independence and enhance quality of life.

                  </p>
                  <br />
                  <p>
                    With OSAN Ability, individuals can rest assured that they are receiving top-quality NDIS Personal Care services delivered with professionalism, compassion, and a commitment to excellence.
                  </p>

                  <div className='PersonalCareList'>
                    <b className='PersonalCareSubTitle  mt-5'>


                      We can provide support services according to your care plan and to suit your individual needs, including :


                    </b>
                    <ul>
                      <li>Social Support </li>
                      <li>Transport</li>
                      <li>Hospital to Home Support</li>
                      <li>Community Nursing services</li>
                      <li>Occupational Therapy assessments and services</li>
                      <li>Support Coordination</li>
                      <li>Day to Day help</li>
                    </ul>

            <p>
            We are here to provide you with the highest quality disability support services that are tailored to your individual needs. OSAN Ability has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.

We are here to provide you with the highest quality disability support services that are tailored to your individual needs. OSAN Ability has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.
            </p>

                  </div>




                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="PersonalCareLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic2} alt='PersonalCareImg' className='PersonalCareImg' />
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
        <FAQ />
      </div>

      <div>
        <Testimonial />
      </div>


    </>
  )
}
