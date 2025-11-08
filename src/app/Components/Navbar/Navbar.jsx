"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import './navbar.css'

import logo from "@/app/Images/logo1.png"; // replace with your logo

export default function Navbar() {
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

      {/* ---------- MID NAV (MAIN NAV) ---------- */}
      <nav className="mid-navbar navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
        <div className="container-fluid">
          {/* LEFT SECTION */}
          <div className="navbar-left d-none d-lg-flex gap-4">
            <Link href="#">Medical Gloves</Link>
            <Link href="#">Automotive</Link>
            <Link href="#">Police</Link>
            <Link href="#">Food</Link>
          </div>

          {/* LOGO */}
          <Link href="/" className="navbar-brand mx-auto">
            <Image src={logo} alt="AdnCare Logo" width={200} height={60} />
          </Link>

          {/* RIGHT SECTION */}
          <div className="navbar-right d-none d-lg-flex gap-4">
            <Link href="#">Schools</Link>
            <Link href="#">Masks</Link>
            <Link href="#">Test Kits</Link>
            <Link href="#">PPE</Link>
            <Link href="#">Industrial</Link>
            <Link href="#">View All</Link>
          </div>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        <div className="collapse navbar-collapse" id="mobileMenu">
          <div className="mobile-menu d-lg-none">
            <Link href="#">Medical Gloves</Link>
            <Link href="#">Automotive</Link>
            <Link href="#">Police</Link>
            <Link href="#">Food</Link>
            <Link href="#">Schools</Link>
            <Link href="#">Masks</Link>
            <Link href="#">Test Kits</Link>
            <Link href="#">PPE</Link>
            <Link href="#">Industrial</Link>
            <Link href="#">View All</Link>
          </div>
        </div>
      </nav>

    
    </header>
  );
}
