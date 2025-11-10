"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./testimonial.css";
import pic1 from '@/app/images/client1.png';
import pic2 from '@/app/images/client2.jpg';

export default function Testimonial() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    { name: "Liam Johnson", role: "Our Clients", text: "Caring Hands provided exceptional support for my son's NDIS journey.", img: pic1 },
    { name: "Sarah Williams", role: "Parent", text: "They guided us through everything. Very supportive and kind.", img: pic2 },
    { name: "David Brown", role: "Participant", text: "Their dedication and compassion improved my daily life.", img: pic1 },
    { name: "Olivia Miller", role: "Support Coordinator", text: "Professional, reliable, and genuinely caring.", img: pic2 },
    { name: "James Carter", role: "Our Clients", text: "They always listen and make sure your needs are met.", img: pic1 }
  ];

  // Slice testimonials based on mobile or desktop
  const slides = [];
  const step = isMobile ? 1 : 2;

  for (let i = 0; i < testimonials.length; i += step) {
    slides.push(testimonials.slice(i, i + step));
  }

  return (
    <div className="testimonial-section container py-5">
      <p className="section-label">OUR TESTIMONIAL</p>
      <h2 className="section-title">
        Why Clients <span>Love Us</span>
      </h2>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        <div className="carousel-inner">
          {slides.map((group, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                {group.map((item, index) => (
                  <div key={index} className={isMobile ? "col-12" : "col-md-6"}>
                    <div className="testimonial-card">
                      <div className="testimonial-header d-flex align-items-center">
                        <div className="user-img-wrapper">
                          <Image src={item.img} width={100} height={100} className="TestimonialImg" alt="Client" />
                        </div>
                        <div className="ms-3">
                          <h5>{item.name}</h5>
                          <p>{item.role}</p>
                          <div className="stars">★★★★★ <span>5.0</span></div>
                        </div>
                      </div>
                      <p className="testimonial-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="custom-prev" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span>&larr;</span>
        </button>
        <button className="custom-next" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
