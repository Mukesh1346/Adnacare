"use client";
import Link from "next/link";
import './ourPlans.css'

export default function OurPlans() {
  return (
   <>
 <div className="OurPlansMainSec">
 <div className="container">
   <section className="plan-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">
          Getting Started With A New Plan
        </h2>

        <div className="row g-4">
          {/* Card One */}
          <div className="col-lg-6 cardMainSec">
            <div className="plan-card">
              <h3 className="plan-title">NDIS Plan Management</h3>
              <p>
                Managing your NDIS budget does not have to be hard.
                You choose the providers, we will handle the bills.
              </p>

              <h5 className="pt-3 pb-2">With Adnacare support services , you can:</h5>
              <ul className="plan-list">
                <li>Track NDIS funds 24/7</li>
                <li>Pay invoices fast and accurately</li>
                <li>Reserve funding for preferred providers</li>
                <li>Process your expenses</li>
                <li>Take control of your NDIS budget</li>
                <li>Access support and advice when you need it</li>
              </ul>

              <Link href="/personal-care1" className="btn PlanBtn btn-warning mt-3">
                NDIS Plan Management →
              </Link>
            </div>
          </div>

          {/* Card Two */}
          <div className="col-lg-6 cardMainSec">
            <div className="plan-card">
              <h3 className="plan-title">NDIS Specialist Support</h3>
              <p>
                At Adnacare support services , we specialize in making your NDIS journey easier.
                Our Support Coordinators are here to help.
              </p>

              <h5 className="pt-3 pb-2">With Adnacare support services, you can:</h5>
              <ul className="plan-list">
                <li>Better understand your NDIS plan</li>
                <li>Get connected with the right service providers</li>
                <li>Get NDIS planning and review assistance</li>
                <li>Get support to maintain and build your independence</li>
                <li>Reach your plan goals</li>
                <li>Access support and advice when you need it</li>
              </ul>

              <Link href="/personal-care2" className="btn PlanBtn btn-light mt-3">
                NDIS Plan Management →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
 </div>
   </>
  );
}
