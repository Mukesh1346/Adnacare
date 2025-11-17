import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/images/Physiotherapy1.jpg'
import './Physiotherapy.css'
import FAQ from '../FAQ/FAQ'
import Testimonial from '../Testimonial/Testimonial'

export default function Physiotherapy() {
  return (
    <>
      <div className='PhysiotherapyMainSec '>
        <div className="container">

         <div className=' PhysioTherapyHeadingSec text-gray'>
         <p className='text-center  mt-4'>We are specialists and provide a comprehensive Physiotherapy treatment service to the elderly and NDIS participants. </p>
 



         </div>
          <div className="row">
            <div className="col-md-6">
              <div className="PhysiotherapyLeftSec">
                <div className='ImageSec'>
                  <Image src={Pic1} alt='PhysiotherapyImg' className='PhysiotherapyImg' />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="PhysiotherapyRightSec">
                <div className='PhysiotherapyTextSec'>
                  <h2 className='PhysiotherapyTitle '>   Our Physiotherapy Service Include :</h2>

                  <ul>
                   <li>Massages</li>
                   <li>Stretching</li>
                   <li> Mobilisation</li>
                   <li>Manipulation</li>
                   <li>Trigger Points Therapy</li>
                   <li>Myofascial release</li>
                   <li>Muscle re-education</li>
                
                  </ul>



<p>If you d like to book an aged care physiotherapist, contact our representative.</p>
               <b>Upon your contact, our team will:</b>
               
               <ul>
                <li>Once you agree with the plan, our physio will conduct physiotherapy treatment in accordance with the most convenient schedule you choo</li>

<li>Guide you through the entire work procedure.</li>
<li>An experienced physiotherapist will then visit you in your home for the first face-to-face meeting.</li>
<li>The expert physiotherapist will listen closely to what pain or health issues are causing trouble to you.</li>
<li>He/she will then complete an assessment of your problem or injury (if any).</li>
<li>After assessing the problem, our physio will suggest a most-suitable health-plan for you.</li>

               </ul>
          

          <b className='ThemeTitle'>Contact OSAN Ability Assist at 1300 799 941 for more information You can also send us your query at : info@osanability.com.au</b>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
      
      </div>


      <div>
        <FAQ/>
      </div>

      <div>
        <Testimonial />
      </div>


    </>
  )
}
