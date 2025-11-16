"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import logo from "@/app/images/logo1.png";
import "./navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [accordion, setAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setAccordion(accordion === id ? null : id);
  };

  return (
    <header className="navbar-container">

      {/* ---------- TOP NAV ---------- */}
      <div className="top-navbar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="contact-info d-flex gap-3">
          <span><i className="bi bi-envelope"></i> info@adncare.com</span>
          <span><i className="bi bi-telephone"></i> +91 9876543210</span>
        </div>
        <div className="social-icons d-flex gap-3">
          <Link href="#"><Instagram size={18} /></Link>
          <Link href="#"><Facebook size={18} /></Link>
          <Link href="#"><Twitter size={18} /></Link>
        </div>
      </div>

      {/* ---------- MID NAV ---------- */}
      <nav className="mid-navbar navbar bg-white shadow-sm px-4 py-3">

<div className="container-fluid d-flex align-items-center justify-content-between">

  {/* LEFT SIDE — LOGO */}
  <Link href="/" className="navbar-brand">
    <Image src={logo} alt="Logo" width={180} height={50} />
  </Link>

  {/* RIGHT SIDE — MENU (Desktop Only) */}
  <div className="desktop-menu d-none d-lg-flex align-items-center gap-4">

    {/* DROPDOWN 1 */}
    <div className="dropdown">
      <button className="navbar-dropdown-btn dropdown-toggle" data-bs-toggle="dropdown">
       ADNA Services
      </button>
      <ul className="navbar-dropdown-menu dropdown-menu">
        <li><Link className="dropdown-item" href="/personal-care2">Personal Care</Link></li>
        <li><Link className="dropdown-item" href="/community-participation">Community Participation</Link></li>
        <li><Link className="dropdown-item" href="/transport-assistant">Transport Assistant</Link></li>
        <li><Link className="dropdown-item" href="/support">Support Coordination</Link></li>
        <li><Link className="dropdown-item" href="/disability">Disability Care Services</Link></li>
        <li><Link className="dropdown-item" href="/domestic">Domestic Assistance</Link></li>
        <li><Link className="dropdown-item" href="/allied-health">Allied Health</Link></li>
        <li><Link className="dropdown-item" href="/home-modification">Home Modification</Link></li>
        <li><Link className="dropdown-item" href="/mobility"> Mobility  Equipment </Link></li>
      </ul>
    </div>

    {/* DROPDOWN 2 */}
    <div className="dropdown">
      <button className="navbar-dropdown-btn dropdown-toggle" data-bs-toggle="dropdown">
        Aged Care
      </button>
      <ul className="navbar-dropdown-menu dropdown-menu">
      <li><Link className="dropdown-item" href="/personal-care1">Personal Care</Link></li>
        <li><Link className="dropdown-item" href="/oldcommunity-participation">Community Participation</Link></li>

        <li><Link className="dropdown-item" href="/transport-assistant-old">Transport Assistant</Link></li>
        <li><Link className="dropdown-item" href="/disabilityold">Disability Care Services</Link></li>
        {/* <li><Link className="dropdown-item" href="/support">Support Coordination</Link></li> */}
        <li><Link className="dropdown-item" href="/domestic-old">Domestic Assistance</Link></li>
        <li><Link className="dropdown-item" href="/allied-health-old">Allied Health</Link></li>
        <li><Link className="dropdown-item" href="/home-modification-old">Home Modification</Link></li>
        <li><Link className="dropdown-item" href="/mobility-old"> Mobility  Equipment </Link></li>
      </ul>
    </div>



    <div className="dropdown">
      <button className="navbar-dropdown-btn dropdown-toggle" data-bs-toggle="dropdown">
      Disability Accommodation
      </button>
      <ul className="navbar-dropdown-menu dropdown-menu">
      <li><Link className="dropdown-item" href="/short-medium-accomodation">Short Medium Term Accomodation</Link></li>
      <li><Link className="dropdown-item" href="/specialist-disability-accommodation">Specialist Disability Accommodation</Link></li>
      <li><Link className="dropdown-item" href="/supported-independent-living"> Supported Independent Living</Link></li>
      <li><Link className="dropdown-item" href="/feature-properties">Featured Properties</Link></li>

      
                    
     
 
      </ul>
    </div>



    <div className="dropdown">
      <button className="navbar-dropdown-btn dropdown-toggle" data-bs-toggle="dropdown">
      Allied Health
      </button>
      <ul className="navbar-dropdown-menu dropdown-menu">
      <li><Link className="dropdown-item" href="/occupational-therapy">Occupational Therapy</Link></li>
      <li><Link className="dropdown-item" href="/physiotherapy">Physiotherapy</Link></li>
      <li><Link className="dropdown-item" href="/other-therapy"> Supported Independent Living</Link></li>
    

      
                    
     
 
      </ul>
    </div>

    {/* EXTRA LINKS (Right Side) */}
    {/* <Link href="/about-us" className="menu-link">About Us</Link>
    <Link href="/contact-us" className="menu-link">Contact Us</Link>
    <Link href="/blog" className="menu-link">Blog</Link> */}
  </div>

  {/* MOBILE TOGGLER */}
  <button className="navbar-toggler d-lg-none" onClick={() => setOpenMenu(!openMenu)}>
    <span className="navbar-toggler-icon"></span>
  </button>

</div>
</nav>

    {/* ---------- MOBILE MENU (Accordion Style) ---------- */}
{openMenu && (
  <div className="mobile-menu">

    {/* Accordion – ADNA Services */}
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => toggleAccordion(1)}>
        ADNA Services
        <span>{accordion === 1 ? "−" : "+"}</span>
      </div>

      {accordion === 1 && (
        <div className="accordion-content">
          <Link href="/personal-care2">Personal Care</Link>
          <Link href="/community-participation">Community Participation</Link>
          <Link href="/transport-assistant">Transport Assistant</Link>
          <Link href="/support">Support Coordination</Link>
          <Link href="/disability">Disability Care Services</Link>
          <Link href="/domestic">Domestic Assistance</Link>
          <Link href="/allied-health">Allied Health</Link>
          <Link href="/home-modification">Home Modification</Link>
          <Link href="/mobility">Mobility Equipment</Link>
        </div>
      )}
    </div>

    {/* Accordion – Aged Care */}
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => toggleAccordion(2)}>
        Aged Care
        <span>{accordion === 2 ? "−" : "+"}</span>
      </div>

      {accordion === 2 && (
        <div className="accordion-content">
          <Link href="/personal-care1">Personal Care</Link>
          <Link href="/oldcommunity-participation">Community Participation</Link>
          <Link href="/transport-assistant-old">Transport Assistant</Link>
          <Link href="/disabilityold">Disability Care Services</Link>
          <Link href="/domestic-old">Domestic Assistance</Link>
          <Link href="/allied-health-old">Allied Health</Link>
          <Link href="/home-modification-old">Home Modification</Link>
          <Link href="/mobility-old">Mobility Equipment</Link>
        </div>
      )}
    </div>

    {/* Accordion – Disability Accommodation */}
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => toggleAccordion(3)}>
        Disability Accommodation
        <span>{accordion === 3 ? "−" : "+"}</span>
      </div>

      {accordion === 3 && (
        <div className="accordion-content">
          <Link href="/short-medium-accomodation">Short Medium Term Accommodation</Link>
          <Link href="/specialist-disability-accommodation">Specialist Disability Accommodation</Link>
          <Link href="/supported-independent-living">Supported Independent Living</Link>
          <Link href="/feature-properties">Featured Properties</Link>
        </div>
      )}
    </div>

    {/* Accordion – Allied Health */}
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => toggleAccordion(4)}>
        Allied Health
        <span>{accordion === 4 ? "−" : "+"}</span>
      </div>

      {accordion === 4 && (
        <div className="accordion-content">
          <Link href="/occupational-therapy">Occupational Therapy</Link>
          <Link href="/physiotherapy">Physiotherapy</Link>
          <Link href="/other-therapy">Other Therapies</Link>
        </div>
      )}
    </div>

  </div>

      )}
    </header>
  );
}
