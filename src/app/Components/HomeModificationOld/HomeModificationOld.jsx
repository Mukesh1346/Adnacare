import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/HomeModificationOld2.jpg'
import './HomeModificationOld.css'

export default function HomeModificationOld() {
    return (
        <>
            <div className='HomeModificationOldMainSec mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="HomeModificationOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='HomeModificationOldImg' className='HomeModificationOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="HomeModificationOldRightSec">
                                <div className='HomeModificationOldTextSec'>
                                    <h2 className='HomeModificationOldTitle'>
                                        Home Modifications and Supported Living Services
                                    </h2>

                                    <p className='HomeModificationOldSubTitle'>
                                        OSAN Ability Assist provides supported living services to support people who are senior citizens living in their own home or living with others. We understand the need to have some modifications in your house to ensure that safety is never compromised. Home modifications are changes to the structure, layout or fittings of a participant s home so they safely access it and move around comfortably in areas they frequently use.
                                    </p>

                                    <ul className='HomeModificationOldSubTitle'>



                                        <li> Installation of ramps, steps, lifts, stair climbers, and other access modifications to improve the safety and accessibility of your home.</li>

                                        <li> Installation of ramps, steps, lifts, stair climbers, and other access modifications to improve the safety and accessibility of your home.</li>
                                        <li>Installation of handrails, grab rails, widening of doorways, lever taps, hand held shower hoses, and other minor modifications to improve the ease and convenience of living in your home.</li>
                                        <li>
                                            Bathroom and toilet modifications, including bathroom renovations
                                            Kitchen modifications</li>


                                    </ul>

                                    <p className='HomeModificationOldSubTitle'>
                                    Our occupational therapists can assess your home and prescribe equipment and modifications, tailored to your specific needs, with your safety and independence in mind. Our tradespeople are fully qualified, insured and licensed professionals, experienced in home modifications and renovations. Contact us and we can talk about necessary home modifications for your home.
                                    </p>

                                   
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
