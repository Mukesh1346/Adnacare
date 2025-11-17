import Image from 'next/image'
import React from 'react'

import Pic1 from '@/app/images/SupportedIndependent1.jpg'
import Pic2 from '@/app/images/SupportedIndependent2.jpg'
import './SupportedIndependent.css'

import Testimonial from '../Components/Testimonial/Testimonial'
import Banner from '@/app/images/SpportedIndependent1.jpg'
import Header from '../Components/Header/Header'
import FAQ from '../Components/FAQ/FAQ'

export default function SupportedIndependent() {
  return (
    <>
        <Header Banner={Banner} subtitle={"Supported Independent Living"}/>
      <div className='SupportedIndependentMainSec'>
        <div className="container">
        <div className="container py-4">
  <div className="row align-items-center">

    {/* Left: Video */}
    <div className="col-md-5 mb-3 mb-md-0">
      <div className="ratio ratio-16x9">
        <video
          src="/video1.mp4"
          controls
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>

    {/* Right: Content */}
    <div className="col-md-7 py-5">
     <div className='IndependentTextSec'>
     <p>
        Supported Independent Living (SIL) is an essential NDIS support service that
        provides supervision and assistance with daily living activities, helping
        people with disabilities live as independently as possible.
      </p>
      <p>
        At OSAN Ability Assist, we deliver high-quality SIL services in Sydney,
        available in both shared group-home environments and as individual drop-in
        support within your own home. Our comfortable and accessible properties are
        located close to local amenities, transport, and community services, ensuring
        convenience and connection.
      </p>
      <p>
        Our experienced and compassionate staff are trained to support participants
        with complex needs as well as those seeking a more independent style of
        living. With OSAN Ability Assist, you receive personalised care, a safe
        environment, and the support needed to achieve greater independence and
        quality of life.
      </p>
     </div>
    </div>

  </div>
</div>


          <div className="row">
            <div className="col-md-6 py-6">
              <div className="SupportedIndependentLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic1} alt='SupportedIndependentImg' className='SupportedIndependentImg' />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="SupportedIndependentRightSec">
                <div className='SupportedIndependentTextSec'>
                  <h2 className='SupportedIndependentTitle'>Our SIL Accommodation include :</h2>
                     
                     <ul>
                        <li>Assistance with personal care , household needs and medical needs, if needed.</li>
                        <li>We include skill & capacity builders & the support workers which the clients may need during their SIL accommodation-living.</li>
                        <li>Clinical support such as administering medication or the management of specialised conditions</li>
                        <li>We include skill & capacity builders & the support workers which the clients may need during their SIL accommodation-living.</li>
                        <li>Many clients under SIL accommodation can also avail a Specialist Disability Accommodation (SDA) package that covers the cost of the physical accommodation.</li>
                        <li>However, our accommodation does not include board and lodging or other day-to-day usual living expenses such as food and activities or the capital costs associated with a persons accommodation.</li>
                          <li>Specialised disability Accommodation</li>
                     </ul>
              


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='SupportedIndependentMainSec'>
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="SupportedIndependentRightSec">
                <div className='SupportedIndependentTextSec '>
                  <h2 className='SupportedIndependentTitle'>     Why Choose OSAN as SIL provider</h2>

                  <p className='SupportedIndependentPara'>
              
At OSAN Ability, we understand that Supported Independent Living (SIL) is more than just providing support its about helping you or your loved one live a life of independence, dignity, and confidence. As a trusted NDIS-registered SIL provider in Sydney, we tailor our services to each individual s needs, preferences, and goals.

Our experienced and caring team offers consistent support, whether in a shared home or through personalised in-home assistance. We focus on creating a safe, comfortable, and empowering environment where participants can grow, explore new opportunities, and connect with their community.

With OSAN Ability, you are not just receiving support you are gaining a partner committed to enhancing quality of life, promoting independence, and providing care with compassion and respect.

                  </p>
                
               



                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="SupportedIndependentLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic2} alt='SupportedIndependentImg' className='SupportedIndependentImg' />
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
       <Testimonial/>
      </div>


    </>
  )
}
