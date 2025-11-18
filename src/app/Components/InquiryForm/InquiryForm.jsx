           "use client"
import React, { useState } from 'react'
import Swal from "sweetalert2";

export default function InquiryForm() {
  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    message:"",
    email:"",
    service:""
  })


  const handleChange = (e)=>{
         const {name,value} =   e.target

         setFormData({
          ...formData,
          [name]: value
         });
  }


  const handleSubmit = async (e)=>{
          e.preventDefault()
              

       try {
        

        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully",
          icon: "success",
          confirmButtonText: "OK",
        });


          setFormData({
            name:"",
            email:"",
            service:"",
            message:"",
            phone:""
          
          })


       } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
        
       }




  }


  return (
    <div>
       <div>
        <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4 p-md-5 bg-light rounded shadow-sm">
            <h3 className="fw-bold mb-3 text-center">Have Questions? Lets Talk</h3>
            <p className="text-center mb-4 small">
              We are here to help you navigate your needs and support options.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" name="name"   required  value={formData.name} onChange={handleChange} placeholder="Full Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="phone"  required  value={formData.phone} onChange={handleChange} placeholder="Phone" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="email"  required  value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="service"  required  value={formData.service} onChange={handleChange} placeholder="Service" />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="4" name='message'  required  value={formData.message} onChange={handleChange} placeholder="How can we help?"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
                    Enquire Now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 fw-semibold">Call 1300 799 942</p>
          </div>
        </div>
      </div>
            </div>
    </div>
  )
}
