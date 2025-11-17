"use client"
import React, { useState } from "react";
import Image from "next/image";
import "./ServicesSection.css";

import pic1 from "@/app/images/Service.png";
import pic2 from "../../images/Service2.png";
import pic3 from "@/app/images/Service3.png";
import pic4 from "@/app/images/Service4.png";
import pic5 from "@/app/images/Service5.png";
import pic6 from "@/app/images/Service6.png";



// hover versions (you can use different or darker images)
import pic1Hover from "@/app/images/ServiceHover1.png";
import pic2Hover from "@/app/images/ServiceHover2.png";
import pic3Hover from "@/app/images/ServiceHover3.png";
import pic4Hover from "@/app/images/ServiceHover4.png";
import pic5Hover from "@/app/images/ServiceHover5.png";
import pic6Hover from "@/app/images/ServiceHover6.png";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Therapeutic Support",
      desc: "Therapeutic support is available to enhance your well-being.",
      img: pic1,
      hoverImg: pic1Hover,
      color: "#0c3b39",
    },
    {
      title: "Daily Living And Life Skills",
      desc: "Support is available to help you navigate everyday life independently.",
      img: pic2,
      hoverImg: pic2Hover,
      color: "#123b63",
    },
    {
      title: "Support & Connection",
      desc: "Our support and connection services are designed to provide you assistance.",
      img: pic3,
      hoverImg: pic3Hover,
      color: "#194f3e",
    },
    {
      title: "Therapeutic Support",
      desc: "Therapeutic support is available to enhance your well-being.",
      img: pic4,
      hoverImg: pic4Hover,
      color: "#582d58",
    },
    {
      title: "Daily Living And Life Skills",
      desc: "Support is available to help you navigate everyday life independently.",
      img: pic5,
      hoverImg: pic5Hover,
      color: "#23465b",
    },
    {
      title: "Support & Connection",
      desc: "Our support and connection services are designed to provide you assistance.",
      img: pic6,
      hoverImg: pic6Hover,
      color: "#0e4147",
    },
  ];

  return (
    <>
      <div className="contianer text-center ServiceHeading">
        <p>what we're offering</p>
        <h2>Our Main Services</h2>
      </div>

      <div className="container">
        <section className="services-section">
          <div className="services-grid">
            {services.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    backgroundColor: isHovered ? item.color : "#ffffff",
                    color: isHovered ? "#ffffff" : "#0c3b39",
                    borderColor: isHovered ? item.color : "#d8d8d8",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="service-image">
                    <Image
                      src={isHovered ? item.hoverImg : item.img}
                      alt={item.title}
                      className="transition-image"
                    />
                  </div>

                  <div className="service-footer">
                    <a href="#">Read More</a>
                    <button className="arrow-btn">→</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
