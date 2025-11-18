"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="p-4 p-md-5 bg-light rounded shadow-sm">
          <h3 className="fw-bold mb-3 text-center">Have Questions? Let's Talk</h3>
          <p className="text-center mb-4 small">
            We are here to help you navigate your needs and support options.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Service"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Enquire Now"}
                </button>
              </div>
            </div>
          </form>

          <p className="text-center mt-3 fw-semibold">Call 1300 799 942</p>
        </div>
      </div>
    </div>
  );
}
