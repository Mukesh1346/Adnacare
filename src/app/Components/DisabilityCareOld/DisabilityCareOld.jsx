"use client";

import Image from "next/image";
import React from "react";
import "./disabilityold.css";

import Pic1 from "@/app/images/Disability-care-old1.jpg";
import Pic2 from "@/app/images/Support.jpg";
import Pic3 from "@/app/images/Support.jpg";
import Pic4 from "@/app/images/Support.jpg";
import Pic5 from "@/app/images/Support.jpg";
import InquiryForm from "../InquiryForm/InquiryForm";

export default function DisabilityCareOld() {
  return (
    <div className="SoftCare-wrapper">

      {/* HERO */}
      <section className="hero-section container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">Disability Support You Can Trust</h1>
            <p className="hero-text">
              At Adnacare support services, we provide one of the most caring disability care services in Sydney. our team includes professional, experienced and devoted Disability Support Workers, Registered Nurses, and Assistants in Nursing, Occupational Therapists, Handymen and Garden crew, providing high quality services to our clients.
            </p>
               <b>Disability Support Services for Elderly Individuals</b>
            <p>At Adnacare support services, we are dedicated to providing exceptional disability care services tailored to the unique needs of seniors. With extensive experience serving elderly loved ones all over Sydney. our team is well-prepared to support you at any stage.

              We understand the distinct requirements of seniors with disabilities and have designed our services accordingly. Whether you need assistance with daily activities, personalised care plans, or companionship, Adnacare support services is devoted to enhancing the quality of life for seniors through compassionate and customised disability care.</p>

            <div className="mt-4 CheckSec">
              <button className="primary-btn">Check Eligibility</button>
              <p className="call-text mt-3">Call <strong>+011 0435902321 941</strong></p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <Image src={Pic1} alt="DisabilityCareOld" className="hero-img disabilityImg" />
          </div>
        </div>
      </section>

      {/* SOFT DIVIDER CURVE */}
      <div className="section-divider"></div>

      {/* SERVICE GRID */}
      <section className="container py-5">
        <h2 className="section-title text-center mb-4">Support Services Tailored to Your Needs

        We can provide Disability Support Services according to your care plan and to suit your individual needs, including :
        </h2>

        <div className="row g-4">
          {[
            "Personal Care",
            "Domestic Assistance",
            "Respite",
            "Shopping Assistance",
            "Social Support",
            "Transport Support",
            "Hospital to Home Assistance",
            "Community Nursing",
            "Occupational Therapy",
            "Support Coordination",
          ].map((item, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="service-card">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="info-section container py-5">
        <div className="info-text-section">
          <h2 className="section-title mb-4">Adnacare support services employs a diverse group of staff who can assist with a wide range of disability care support services, including traditional supports such as personal care and domestic assistance, through to individualised supports, to meet your social, recreational, occupational and personal needs.</h2>
          <p>
          We can also assist with a broader range of services that you may require, for example, we can provide specific staff training to meet complex individual needs, and clinical staff (including Registered Nurses) for specialised care.
          </p>
         
        </div>
      </section>

      {/* IMAGE CARD ROW */}
      {/* <section className="container pb-5">
        <div className="row g-4">
          {[Pic2, Pic3, Pic4, Pic5].map((img, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="soft-card">
                <Image src={img} alt="DisabilityCareOld" className="soft-card-img" />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ENQUIRY FORM */}
     <div>
      <InquiryForm/>
     </div>

    </div>
  );
}
