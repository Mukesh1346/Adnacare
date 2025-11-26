import React from "react"
import './footer.css'
import Image from "next/image"
import logo from "@/app/images/logo1.png";
import { a } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-area text-white pt-5 pb-4">
      <div className="container">

        <div className="row gy-4">

          {/* Column 1 */}
          <div className="col-lg-3 col-md-6">
            <Image src={logo} className="Footerlogo" alt="logoImg" />

            <p className="footer-contact">📞 +011 0493664688
            </p>
            <p className="footer-contact">📧 Info@Adnacare support services.com.au</p>

            {/* <h6 className="footer-heading mt-4">📲 DOWNLOAD APP</h6> */}
            {/* <div className="d-flex flex-wrap">
                <img src="/google-play.png" className="footer-store mb-2 me-2" alt="Google Play" />
                <img src="/app-store.png" className="footer-store mb-2" alt="App Store" />
              </div> */}
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">🪐Care for Seniors</h6>
            <ul className="footer-list">
              <li><a className="text-decoration-none text-light" href="/personal-care1">Elder Care – Support for seniors</a> </li>
              <li><a className="text-decoration-none text-light" href="/oldcommunity-participation">Community – Stay social</a> </li>
              <li><a className="text-decoration-none text-light" href="/transport-assistant-old">Transport – Safe rides</a> </li>
              <li><a className="text-decoration-none text-light" href="/disabilityold">Disability Care – Special support</a> </li>
              <li><a className="text-decoration-none text-light" href="/domestic-old">Domestic Help – Home chores</a> </li>
              <li><a className="text-decoration-none text-light" href="/allied-health-old">Allied Health – Health services</a> </li>


              {/* <li>Donate Us</li>
                <li>Our Team</li>
                <li>Fundraise For Us</li>
                <li>Volunteer With Us</li>
                <li>Corporate Support</li>
                <li>NDIS Explained</li> */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">🧑‍🤝‍🧑 CARE SERVICE </h6>
            <ul className="footer-list">
              <li><a className=" text-decoration-none text-light" href="/personal-care2">Personal Care</a></li>
              <li><a className=" text-decoration-none text-light" href="/community-participation">Community Participation</a></li>
              <li><a className=" text-decoration-none text-light" href="/transport-assistant">Transport Assistant</a></li>
              <li><a className=" text-decoration-none text-light" href="/support">Support Coordination</a></li>
              <li><a className=" text-decoration-none text-light" href="/disability">Disability Care Services</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-6">
            <h4 className="subscribe-title">Subscribe to People First Dispatch</h4>
            <p className="subscribe-text">A weekly digest of latest news, articles and resources</p>

            <form className="footer-form">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn themeBackground w-100">Subscribe</button>
            </form>

            <small className="d-block mt-2">
              By continuing, you agree to Adnacare support services Terms of Use and Privacy Policy
            </small>
          </div>

        </div>

        <hr className="footer-divider" />

        <p className="text-center m-0">© 2024 Adnacare support services . All rights reserved.</p>

      </div>
    </footer>
  )
}
