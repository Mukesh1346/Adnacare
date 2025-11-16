import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Occupational-Therapy2.jpg'
import './OccupationalTherapy.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function OccupationalTherapy() {
  return (
    <>
      <div className='OccupationalTherapyMainSec '>
        <div className="container">

         <div className='pb-5 text-gray'>
         <p>Occupational therapists usually known as OTs use different methods to maintain, gain or improve a person’s independence. OTs work with individuals to assist them in doing things that occupy their time looking after themselves, work or school, social activities, being part of the community etc.


</p>

<p> Our certified Occupational Therapists have always focused on promoting health and well-being by encouraging the therapy-seekers to engage in self-care activities. These activities include day-to-day activities such as dressing, showering, cooking; productive activities like work, volunteering, and caring for others; and social activities such as being part of a community group, engaging in a hobby, or being part of a friendship group.</p>

<p>
  Our team of Occupational therapists play an important role in enabling people with disability to identify and implement methods that support their participation in occupations. This may include modifying an activity or an environment.</p>

         </div>
          <div className="row">
            <div className="col-md-6">
              <div className="OccupationalTherapyLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic1} alt='OccupationalTherapyImg' className='OccupationalTherapyImg' />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="OccupationalTherapyRightSec">
                <div className='OccupationalTherapyTextSec'>
                  <h2 className='OccupationalTherapyTitle'>Our Occupational Therapy Include:</h2>

                  <ul>
                    <li>Therapeutic use of occupations, and activities.</li>
                    <li>Skill development, self-management, home management and community re-integration.</li>
                    <li>Modification of environments (e.g. home, work-places and community places) and adaptation of processes, including the application of ergonomic principles.</li>
                    <li>Rehabilitation assistance and community mobility.</li>
                    <li>
                      Contact OSAN Ability Assist at 1300 799 941 for more information on our Allied Health Services.</li>
                  </ul>


                  <p className='OccupationalTherapySubTitle'>
                    You can also send us your query at : info@osanability.com.au
                    ndis providers

                  </p>



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
