import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/CommunityOld1.jpg'
import './comunityOld.css'

export default function ComunityOld() {
    return (
        <>
            <div className='ComunityOldMainSec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ComunityOldLeftSec">
                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='ComunityOldImg' className='ComunityOldImg' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ComunityOldRightSec">
                                <div className='ComunityOldTextSec'>
                                    <h2 className='ComunityOldTitle'> Community Participation</h2>

                                    <p className='ComunityOldSubTitle'>As you get older, you feel the need to belong to a community and feel connected to people your age. As much as you would like spending time with your family, it is important to form your own socal circle. At OSAN Ability, we have a huge vision of forming different communities within our team with a range of community & social participation programs focused on empowering older adults. It can be incredibly hard and demotivating and these social activities can be beneficial and fulfilling.

                                        Community Participation however can help you to get connected to different people as it is one of the most important parts for all the elderly both their physical & emotional well-being. Thats why OSAN Ability provides a range of community & social participation programs
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ComunityOldLeftSec mt-5">
                            <div className='ComunityOldTextSec2'>
                                    <h2 className='ComunityOldTitle'> Community Participation</h2>
                                          <b>Our Community Participation Approach</b>
                                              <ul>
                                                <li>Understanding our client – As every individual has different needs, interests and hobbies. We offer the most holistic, outcome-focused community support.</li>
                                                <li>Deciding on activities – We proceed to talk about the activities that could be performed and within the means of the client. This could involve activities that could boost creativity, intelligence, physical activities or technology.</li>
                                                <li>
                                                Increasing your scope of activity – We are always encouraging you to try new things and experiences which might include arts & craft, technology or fitness activities
                                                </li>

                                                <li>Make friends – Make friends everyday with us. meeting new people at different social events will help you form connections. You would meet people with different walks of life with the same interests as you.</li>
                                                <li>Individual – You can choose to learn skills individually or join a group.</li>
                                              </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ComunityOldRightSec">
                                

                                <div className='ImageSec'>
                                    <Image src={Pic1} alt='ComunityOldImg' className='ComunityOldImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

