        "use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Banner1 from '@/app/images/Banner1.png'
import './HeroSection.css'
import { FaArrowRight } from "react-icons/fa6";
import icon1 from '@/app/images/icon.png'
import icon2 from '@/app/images/icon1.png'

import Swal from "sweetalert2";
import axios from 'axios'


export default function HeroSection() {
    const [formData,setFormData] = useState({
         name : "",
         email:"",
         phone:"",
         service:"",
         message:""
    })

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
   const handleSubmit = async (e)=>{
    e.preventDefault()


    try {
      const res = await axios.post("http://adnacare.com.au/api/sendEnquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { ...formData },
      });

      if (res.data.status === true) {
        Swal.fire({
          title: "Success!",
          text: res.data.message || "Form submitted successfully",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({ name: "", phone: "", email: "", service: "", message: "", });
      } else {
        Swal.fire({
          title: "Error!",
          text: res.data.message || "enquary fails",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }

   }
      

    return (
        <div className='MainHeroSection'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 HeroLeftMainSec'>
                        <div className="leftSecHero">
                            <div className="leftMainSec">
                                <div className='HeroTopHeading'>
                                    <h2>We Provide Disability Services & in Home Aged Care Services</h2>
                                </div>
                                <div className='HeroSubTitle'>
                                    <p>We're here for every step of your NDIS journey, ensuring you & providing personalized care and support to help you thrive.</p>
                                </div>

                                <div className='d-flex  buttonSec'>
                                    <button className='BookBtn'>Book An Appointment <FaArrowRight /></button>
                                    <button className='AboutBtn'>About Us  <FaArrowRight className='text-light' /></button>
                                </div>

                                <div className=' iconSection  d-flex'>
                                    <div className='d-flex iconBox1'>
                                        <Image src={icon1} className='icon' alt='icon1' />
                                        <div className='Icontext'>
                                            <h2>220+</h2>
                                            <p>Expert Team Member</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='d-flex iconBox2'>
                                            <Image src={icon2} className='icon' alt='icon1' />
                                            <div className='Icontext'>
                                                <h2>98%</h2>
                                                <p>client satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="RightSecHero">
                            <Image src={Banner1} className='RightSecImg' alt='RightSecImg' />
                        </div>
                    </div>

                </div>

            </div>
            <div className="RequestCallBack">
  <div className="container formContainer ">
    <h4 className="text-light fw-bold mb-2 text-center">Request Call Back</h4>

    <form onSubmit={handleSubmit}>
      <div className="row">

        {/* NAME */}
        <div className="col-md-6 mb-1">
          <label className="text-light mb-1">Name *</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* PHONE */}
        <div className="col-md-6 mb-1">
          <label className="text-light mb-1">Phone *</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            placeholder="Phone "
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div className="col-md-6 mb-1">
          <label className="text-light mb-1">Email *</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            className="form-control"
            placeholder=" Email "
            onChange={handleChange}
          />
        </div>

        {/* SERVICE */}
        <div className="col-md-6 mb-1">
          <label className="text-light mb-1">Service *</label>
          <input
            type="text"
            name="service"
            className="form-control"
            value={formData.service}
            placeholder=" Service"
            onChange={handleChange}
          />
        </div>

        {/* MESSAGE */}
        <div className="col-md-12 mb-1">
          <label className="text-light mb-1">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            className="form-control"
            rows="1"
            placeholder="How can we help?"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="col-md-12 text-center">
          <button type="submit" className="SubmitButton bg-warning " >
            Submit
          </button>
        </div>

      </div>
    </form>
  </div>
</div>


        </div>
    )
}
