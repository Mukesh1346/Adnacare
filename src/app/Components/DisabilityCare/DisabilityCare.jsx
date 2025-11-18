"use client";

import Image from "next/image";
import React from "react";
import "./disability.css";

import Pic1 from "@/app/images/Support1.jpg";
import Pic2 from "@/app/images/Support.jpg";
import Pic3 from "@/app/images/Support.jpg";
import Pic4 from "@/app/images/Support.jpg";
import Pic5 from "@/app/images/Support.jpg";

export default function DisabilitySupportBeautiful() {
  return (
    <div className="SoftCare-wrapper">

      {/* HERO */}
      <section className="hero-section container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">Disability Support You Can Trust</h1>
            <p className="hero-text">
              At Adna Care, we provide caring, high-quality disability support services tailored to each individual.
              Our team includes experienced Support Workers, Nurses, Occupational Therapists, and dedicated care staff.
            </p>
            <div className="mt-4 buttonSec">
              <button className="primary-btn">Check Eligibility</button>
              <p className="call-text mt-3">Call <strong>1300 799 941</strong></p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <Image src={Pic1} alt="Disability Support" className="hero-img" />
          </div>
        </div>
      </section>

      {/* SOFT DIVIDER CURVE */}
      <div className="section-divider"></div>

      {/* SERVICE GRID */}
      <section className="container py-5">
        <h2 className="section-title text-center mb-4">Support Services Tailored to Your Needs</h2>

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
       <h2 className="section-title mb-4">NDIS Disability Support</h2>
        <p>
          At Adna Care, we provide support that adapts to your lifestyle and needs. We proudly assist participants in
          Sydney, Melbourne, and Brisbane at every stage of their NDIS journey.
        </p>
        <p>
          Our team works collaboratively with you to identify the supports required to live as independently and
          confidently as possible.
        </p>
        <p>
          We provide both everyday living support and specialized clinical care. Our diverse care team ensures that
          support is delivered with respect, dignity, and consistency.
        </p>
        <p>
          We work closely with the NDIA to ensure participants experience a smooth and supported transition to the
          providers of their choice.
        </p>
       </div>
      </section>

      {/* IMAGE CARD ROW */}
      <section className="container pb-5">
        <div className="row g-4">
          {[Pic2, Pic3, Pic4, Pic5].map((img, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="soft-card">
                <Image src={img} alt="Support Service" className="soft-card-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENQUIRY FORM */}
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
