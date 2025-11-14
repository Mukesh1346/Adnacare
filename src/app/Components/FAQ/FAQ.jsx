"use client";
import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "Is my NDIS registration number the same as my NDIS provider number?",
    answer:
      "Your registration number is given to you by the NDIS Commission. Your provider number is given to you by NDIA and is what you use for billing.",
  },
  {
    question: "Do I need to be registered with NDIS?",
    answer:
      "Registration with NDIS depends on the type of supports and services you provide. Some providers must register, while others can operate unregistered.",
  },
  {
    question: "What is physiotherapy?",
    answer:
      "Physiotherapy helps people restore movement and function when affected by injury, illness, or disability through exercises, manual therapy, and education.",
  },
  {
    question: "Does physiotherapy treatment hurt?",
    answer:
      "Some mild discomfort can occur during treatment, especially when targeting stiff or sore areas, but it should not cause significant pain.",
  },
  {
    question: "What is Speech Pathology?",
    answer:
      "Speech Pathology focuses on assessing and treating communication, speech, and swallowing difficulties in people of all ages.",
  },
  {
    question: "How long will I have to wait to get an appointment?",
    answer:
      "Wait times can vary based on location and demand. We aim to schedule your first appointment as soon as possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ’s</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "300px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
