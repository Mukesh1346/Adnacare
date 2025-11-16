import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Header/Header";
  import  Banner from '@/app/images/Short-Medium-Accomodation.jpg'
export default function AccommodationInfo() {
  return (
   <>
   <Header Banner={Banner} subtitle={" Short Term Accommodation & Respite Care Provider"}/>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className=" mb-4 fw-bold">
            Short Term Accommodation & Respite Care Provider
          </h2>
          <p>
            At <strong>OSAN Ability</strong>, we are a fully accredited and approved
            NDIS service provider that offers short term accommodation &
            assistance. Our operational principles aim to enhance the lifestyle of
            our accommodators by encouraging independence and creating both group
            and individual opportunities within the community.
          </p>
          <p>
            With highly experienced, qualified staff, we have created a homely,
            comfortable, respectful, caring, safe and enjoyable environment for
            all our accommodators.
          </p>

          <h4 className="mt-4 fw-bold">Our Support Services Include:</h4>
          <ul>
            <li>Short term accommodation & respite in a supported facility</li>
            <li>Regular, ongoing respite</li>
            <li>Emergency respite</li>
            <li>Respite for carers</li>
          </ul>

          <h4 className="mt-4 fw-bold">What is expected in short term accommodation</h4>
          <ul>
            <li>Personal Care</li>
            <li>Accommodation</li>
            <li>Food / Meal Plan</li>
            <li>
              Funding for short term accommodation: NDIS usually funds up to 28
              days per year, used flexibly (e.g., 14 days at once or weekends).
            </li>
          </ul>
          <p>
            You can find the rates in the <strong>NDIS Price Guide</strong>.
          </p>

          <h3 className="mt-5 fw-bold">Medium Term Accommodation</h3>
          <p>
            OSAN Ability is a registered NDIS provider offering medium-term
            accommodation services in Sydney, NSW. Our independent living services
            allow people with a disability to live the way they want with tailored
            support.
          </p>

          <h4 className="fw-bold">Our Medium-Term Accommodation includes:</h4>
          <ul>
            <li>Accommodation availability for 90 days</li>
            <li>Can be acquired while waiting for SDA</li>
            <li>Safe and comfortable homes</li>
            <li>Community participation and access</li>
            <li>Independent living skills</li>
            <li>Daily personal supports</li>
          </ul>

          <p className="mt-3">
            OSAN Ability will work with you to provide tailored short-term and
            medium-term accommodation support. Staff members are onsite 24/7.
          </p>

          <div className="text-center mt-4">
            <a href="tel:1300799941" className="btn btn-primary btn-lg">
              Call Us: 1300 799 941
            </a>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
