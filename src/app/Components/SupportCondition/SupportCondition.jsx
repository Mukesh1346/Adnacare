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
            At Adna Care, we provide professional and personalised support coordination to
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


<div className="container SupportParaText">
  
<p>At Adna Care, we look to provide you with the highest quality disability support services that are tailored to your individual needs. Adna Care has been providing disability support services in Sydney, Melbourne and Brisbane for many years and is equipped to assist you whatever stage you are in.</p>

<p>Adna Care can work with you to provide support, in the way that suits you best. It is important under the NDIS program that you inform us all types of services and supports you may require to support you to live your life as independently as possible.</p>

<p>Adna Care employs a diverse group of staff who can assist with a wide range of support services, including traditional supports such as personal care and domestic assistance, through to individualised supports, to meet your social, recreational, occupational and personal needs.</p>

<p>We can also assist with a broader range of services that you may require, for example, we can provide specific staff training to meet complex individual needs, and clinical staff (including Registered Nurses) for specialised care.</p>

<p>Adna Care and the NDIA work closely together to ensure that all NDIS participants experience a smooth transition to another service provider of their choice and that nobody is left without care during the transition period.</p>

<p>If you would like to enrol under the NDIS program for the first time, please contact us on <strong>+011 0435902321 941</strong> or contact the National Disability Insurance Agency (NDIA).</p>

</div>


 </div>
 <Services/>
      
      
    </div>
  );
}
