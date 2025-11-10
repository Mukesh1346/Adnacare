"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventsSection.css";
import pic1 from "@/app/images/Event1.jpg";
import pic2 from "@/app/images/Event2.jpg";
import Image from "next/image";

const eventsData = [
  {
    id: 1,
    title: "Energy And Mines Ex Australia Summit",
    speaker: "Jordan Eugenio",
    role: "Training Coordinator",
    venue:
      "Sydney Opera House Bennelong Point, Sydney NSW 2000, Australia",
    date: "05 July 2024",
    time: "10:30am - 12:30pm",
    image: pic1,
  },
  {
    id: 2,
    title: "Learn Exactly How We Made Event",
    speaker: "Serhiy Yaroslav",
    role: "Peer Support Leader",
    venue:
      "Sydney Opera House Bennelong Point, Sydney NSW 2000, Australia",
    date: "24 October 2024",
    time: "10:30am - 12:30pm",
    image: pic2,
  },
];

export default function EventsSection() {
  return (
    <section className="events-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 heading">
          Join Our <span>Upcoming Event</span>
        </h2>

        {eventsData.map((event) => (
          <div key={event.id} className="event-card row g-0 align-items-center mb-5">
            {/* Left Image */}
            <div className="col-md-4 LeftSection">
              <Image
                src={event.image}
                alt={event.title}
                className="LeftImage img-fluid rounded-start-3"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-8 bg-white position-relative  rounded-end-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center shadow-sm content-box">
              <div>
                <p className="text-muted mb-1 small">
                  <i className="bi bi-geo-alt"></i> NSW, Australia
                </p>

                <h4 className="fw-bold mb-2 event-title">{event.title}</h4>

                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={event.image}
                    alt={event.speaker}
                    width={40}
                    height={40}
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="mb-0 fw-semibold">{event.speaker}</h6>
                    <small className="text-muted">{event.role}</small>
                  </div>
                </div>

                <p className="text-muted small mb-3">{event.venue}</p>
                <button className="btn btn-warning fw-bold get-ticket-btn">
                  Get A Ticket →
                </button>
              </div>

              <div className="date-box text-center mt-4 mt-md-0">
                <h3 className="text-light mb-0 fw-bold date-day">
                  {event.date.split(" ")[0]}
                </h3>
                <p className="text-light mb-2 fw-medium date-month">
                  {event.date.split(" ").slice(1).join(" ")}
                </p>
                 <hr />
                <p className="text-light small">
                  <i className="bi bi-clock"></i> {event.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
