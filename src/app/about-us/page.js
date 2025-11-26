import React from 'react';
import './aboutus.css'; // optional for styling
import Header from '../Components/Header/Header';
import Banner from "@/app/images/contact-us.jpg"
import InquiryForm from '../Components/InquiryForm/InquiryForm';

export default function Page() {
  return (
    <>

      <Header Banner={Banner} subtitle={"About Us"} />


      <div className="container my-5">
        <h2 className='text-center ThemeTitle'>About Us – Adnacare support services</h2>
        <p>At Adnacare support services, we are a fully accredited and approved NDIS service provider that offers short term accommodation & assistance. Our operational principles aim to enhance the lifestyle of our accommodators by encouraging independence and creating both group and individual opportunities within the community.

          With highly experienced, qualified staff, we have created a homely, comfortable, respectful, caring, safe and enjoyable environment for all our accommodators.</p>
        <div className="row">
          <div className='col-md-12'>
            <p>

              At Adnacare support services, we are dedicated to improving the quality of life for individuals living with disabilities and older adults who wish to remain independent in the comfort of their own homes. Built on the values of compassion, respect, and reliability, we proudly deliver personalised care services that truly make a difference in everyday living.

              We understand that every persons needs, goals, and challenges are unique. That is why our approach is centred around individualised support, ensuring that each client receives thoughtful, tailored care designed to enhance their independence, wellbeing, and confidence. Whether it is daily living assistance, community access, personal care, or specialised support, our team is committed to providing care that is both meaningful and empowering.

              Our carers are highly trained, patient, and passionate professionals who genuinely care about the people they support. We strive to build strong, trusting relationships with our clients and their families, creating a safe environment where everyone feels valued, understood, and respected.

              At Adnacare support services, we believe that quality care is more than just service—it is about connection, dignity, and making every day more comfortable and fulfilling. With a focus on kindness and professionalism, we aim to be a dependable partner in your care journey.

              Whether you need disability support or in-home aged care, Adnacare support services is here to ensure you receive the best possible care—right where you feel most at home.</p>

          </div>

          <div>
            <InquiryForm/>
          </div>

          {/* Left side - Contact Details */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center contact-left">


            <p>
              If you have any questions, concerns, or feedback, we are here for you.
              Contact NDIS and Aged Care Provider Adnacare support services Sydney via email, phone, or post.
            </p>
            <p>
              <strong>Email:</strong> info@adncare.com.au <br />
              <strong>Phone:</strong> +61 123 456 789 <br />
              <strong>Address:</strong> 123 Main St, Sydney, NSW
            </p>
            <p>Our exceptional staff will answer your questions and value your feedback. Get in touch today!</p>
          </div>

          {/* Right side - Map */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <iframe
              title="Adna Ability  Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.123456789012!2d151.209296015!3d-33.86881998065921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b7e1b6a1b123%3A0x123456789abcdef!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </>
  );
}
