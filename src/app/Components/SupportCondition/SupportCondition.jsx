import Pic1 from '@/app/images/Support1.jpg';
import Pic2 from '@/app/images/Support.jpg';
import Pic3 from '@/app/images/Support.jpg';
import Pic4 from '@/app/images/Support.jpg';
import Pic5 from '@/app/images/Support.jpg';
import React from 'react';
import './support.css';
import Image from 'next/image';
import Services from '../Services/Services';

export default function SupportCondition() {
  return (
    <div className="container Support-wrapper py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="fw-bold mb-3">Disability Support Coordination</h1>
          <p className="lead">
            At OSAN Ability, we provide professional and personalised support coordination to
            ensure you receive the right care, at the right time.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <Image src={Pic1} alt="Disability Support Coordination" width={500} height={350} className="img-fluid SupportMainImg rounded shadow" />
        </div>
      </div>

      <div className="row g-4 mb-5">
        {[{ title: "Personalised Care Planning", text: "We work closely...", img: Pic2 },
          { title: "Comprehensive Support Services", text: "From personal care...", img: Pic3 },
          { title: "Specialised Clinical Support", text: "Our clinical team...", img: Pic4 },
          { title: "NDIS Guidance & Coordination", text: "We assist you...", img: Pic5 }]
          .map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <Image src={item.img} alt={item.title} width={400} height={250} className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="small mb-0">{item.text}</p>
                </div>
              </div>
            </div>
        ))}
      </div>

      <div className="mb-5"> 
        <h2 className="fw-bold mb-3 text-center">Comprehensive Support Services Tailored to You</h2>
        <p className='text-center'>We can provide support services according to your care plan and to suit your individual needs, including:</p>
        <div className="row g-3 mb-4">
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Personal Care</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Domestic Assistance</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Respite</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Shopping Assistance</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Social Support</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Transport</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Hospital to Home Support</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Community Nursing services</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Occupational Therapy assessments and services</div></div>
  <div className="col-sm-6 col-lg-4"><div className="p-3 border rounded bg-white shadow-sm h-100">Support Coordination</div></div>
</div>


<div className="container">
  
<p>At OSAN Ability, we look to provide you with the highest quality disability support services that are tailored to your individual needs. OSAN Ability has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.</p>

<p>OSAN Ability can work with you to provide support, in the way that suits you best. It is important under the NDIS program that you inform us all types of services and supports you may require to support you to live your life as independently as possible.</p>

<p>OSAN Ability employs a diverse group of staff who can assist with a wide range of support services, including traditional supports such as personal care and domestic assistance, through to individualised supports, to meet your social, recreational, occupational and personal needs.</p>

<p>We can also assist with a broader range of services that you may require, for example, we can provide specific staff training to meet complex individual needs, and clinical staff (including Registered Nurses) for specialised care.</p>

<p>OSAN Ability and the NDIA work closely together to ensure that all NDIS participants experience a smooth transition to another service provider of their choice and that nobody is left without care during the transition period.</p>

<p>If you would like to enrol under the NDIS program for the first time, please contact us on <strong>1300 799 941</strong> or contact the National Disability Insurance Agency (NDIA).</p>

</div>


 </div>
 <Services/>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4 p-md-5 bg-light rounded shadow-sm">
            <h3 className="fw-bold mb-3 text-center">Have Questions? Let's Talk</h3>
            <p className="text-center mb-4 small">
              Our friendly team is ready to support you.
            </p>

            <form>
  <div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Full Name</label>
      <input type="text" className="form-control" placeholder="Enter your name" />
    </div>

    <div className="col-md-6">
      <label className="form-label">Phone Number</label>
      <input type="text" className="form-control" placeholder="Enter your phone number" />
    </div>

    <div className="col-12">
      <label className="form-label">Email Address</label>
      <input type="email" className="form-control" placeholder="Enter your email" />
    </div>

    <div className="col-12">
      <label className="form-label">Your Message</label>
      <textarea rows="4" className="form-control" placeholder="How can we help you?"></textarea>
    </div>

    <div className="col-12 text-center">
      <button type="submit" className="btn btn-primary px-4 py-2">Submit Enquiry</button>
    </div>
  </div>
</form>

            <p className="text-center mt-3 fw-semibold">Call 1300 799 941</p>
          </div>
        </div>
      </div>
    </div>
  );
}
