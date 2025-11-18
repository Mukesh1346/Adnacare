import React from 'react';
import './ContactSection.css'; // optional for styling
import Header from '../Components/Header/Header';
import Banner from "@/app/images/contact-us.jpg"

export default function Page() {
  return (
    <>
    
        <Header Banner={Banner}  subtitle={"Contact Us"}/>
    

    <div className="container my-5">
      <div className="row">
        {/* Left side - Contact Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center contact-left">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, concerns, or feedback, we are here for you. 
            Contact NDIS and Aged Care Provider Adna Care Sydney via email, phone, or post.
          </p>
          <p>
            <strong>Email:</strong> info@osanability.com <br/>
            <strong>Phone:</strong> +61 123 456 789 <br/>
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
