import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/PersonalCare2.jpg'
import Pic2 from '@/app/images/PersonalCare1.jpg'
import './personalcare.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function PersonalCare1() {
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
                                    <h2 className='PersonalCareTitle'>Support at Home | Aged Care Services</h2>

                                    <p className='PersonalCareSubTitle'>Adna Care is a trusted provider of in-home aged care services, specialising in delivering personalised and compassionate personal care to seniors in the comfort of their own homes. With a commitment to promoting independence, dignity, and well-being, Adna Cares caregivers offer a range of support services tailored to meet the unique needs of each individual client.

At the heart of Adna Cares approach is a dedication to understanding and respecting the preferences and routines of seniors. Our caregivers take the time to build meaningful relationships with participants, fostering trust and rapport that allows for open communication and personalised care planning.

    </p>
                                    <p className='PersonalCareSubTitle'>
                                    Adna Cares personal care services encompass a variety of essential activities designed to help seniors maintain their independence and quality of life. This may include assistance with activities of daily living such as bathing, dressing, grooming, and toileting, provided with sensitivity and respect for each individuals dignity and privacy.


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
                                       Personal Care involves a Carer physically touching your loved one and we have professionally certified caregivers to ensure there is full trust and safety. Your health, well-being, and lifestyle are important to us. We understand that everyone is different which is why we offer you a broad range of home care services. We will work with you to ensure you get the support you need with elderly care at home and in the community. Everyday personal care is essential to independent living at home, which is why we provide you with access to personal services including
                                

                                    </p> 
                                    <div className='PersonalCareList'>
                                        <b className='PersonalCareSubTitle  mt-5'>

                                        We can help you with disability transportation:

                                        </b>
                                        <ul>
                                            <li>Comfortable and safe transportation for all our passengers.</li>
                                            <li>Highly trained staff and drivers to ensure that transportation for all people with disabilities with our fleet of wheelchair-accessible vehicles.</li>
                                            <li> We can assist you and your family in planning for all your travel and transport needs.</li>
                                            <li>We offer a range of specialised mobility services including modified vehicles to transport wheelchairs and other support aides.</li>
                                            <li>drive the vehicle with specialised controls or other adaptations.</li>
                                           
                                        </ul>
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
            <FAQ/>
           </div>

           <div>
            <Testimonial/>
           </div>


        </>
    )
}
