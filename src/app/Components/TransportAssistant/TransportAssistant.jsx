import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/TransportAssistant.jpg'
import Pic2 from '@/app/images/TransportAssistant1.jpg'
import './transportAssistant.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'
import InquiryForm from '../InquiryForm/InquiryForm'

export default function TransportAssistant() {
    return (
        <>
            <div className='TransportAssistantMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="TransportAssistantLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='TransportAssistantImg' className='TransportAssistantImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="TransportAssistantRightSec">
                                <div className='TransportAssistantTextSec'>
                                    <h2 className='TransportAssistantTitle ThemeTitle'>Empowering Access: NDIS Transportation Assistance</h2>

                                    <p className='TransportAssistantSubTitle'>As a registered NDIS Service Provider, Adna Care Assist provides most convenient transportation & travel assistance to NDIS participants. According to NDIS, you will be able to access funding through the NDIS if you cannot use public transport without substantial difficulty due to their disability. Funding takes into account any relevant taxi subsidy scheme, and it does not cover transport assistance for carers to transport their family member with a disability for everyday commitments. Contact us to know more about this.
                                
                                    </p>
                                    <p className='TransportAssistantSubTitle'>
                                    This transport support is covered in the Assistance with Social and Community Participation funding in your NDIS plan. We will assist you with modified vehicles that are convenient for disabled people for their community participation transportation.
                                    </p>

        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='TransportAssistantMainSec'>
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="TransportAssistantRightSec">
                                <div className='TransportAssistantTextSec '>
                                    <h2 className='TransportAssistantTitle ThemeTitle'>We can help you with disability transportation:</h2>

                                    {/* <p className='TransportAssistantPara'>
                                        At Adna Care, we simply look forward to providing client-oriented care that brings all allied health together working towards the same goal. Our effective allied health plans are clinically proven with multiple benefits to every client, bringing together multi-disciplinary ideas on the client needs.

                                        Simply put, we get into the core of the health problems and find the root cause and then treat accordingly so that the client gets maximum benefits in quick time.

                                    </p> */}
                                    <div className='TransportAssistantList'>
                                        <b className='TransportAssistantSubTitle  mt-5'>

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
                            <div className="TransportAssistantLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic2} alt='TransportAssistantImg' className='TransportAssistantImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
               <InquiryForm/>
            </div>


         
           <div>
            <Testimonial/>
           </div>


        </>
    )
}
