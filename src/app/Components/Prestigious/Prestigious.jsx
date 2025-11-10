import React from "react";
import "./prestigious.css";
import { FaArrowRight } from "react-icons/fa6";
import brand1 from '@/app/images/brand1.png'
import brand2 from '@/app/images/brand2.png'
import brand3 from '@/app/images/brand3.png'
import brand4 from '@/app/images/brand4.png'
import brand5 from '@/app/images/brand5.png'
import brand6 from '@/app/images/brand6.png'
import Image from "next/image";

export default function Prestigious() {
  const images1 = [
    brand1,
    brand6,
    brand3,
    brand2,
    brand4,
    brand5
  ];
  const images2 = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
  ];
  const images3 = [
    brand6,
    brand5,
    brand4,
    brand3,
    brand2,
    brand1,
  ];

  return (
    <section className="PrestigiousMainSec">
      <div className="container pContainer">
        <div className="PrestigiousCard">
          <div className="row align-items-center">
            {/* -------- LEFT TEXT SECTION -------- */}
            <div className="col-md-6">
              <div className="PrestigiousLeftTextSec">
                <h4>OUR AWARDS</h4>
                <div>
                  <h2>We've got prestigious awards for our work</h2>
                  <p>
                    Receiving prestigious awards for our work is a testament to
                    our unwavering dedication and commitment to excellence.
                    These accolades reflect our tireless efforts and passion.
                  </p>
                </div>
                <div>
                  <button className="AppointmentButton">
                    Book An Appointment
                    <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* -------- RIGHT IMAGE CAROUSEL SECTION -------- */}
            <div className="col-md-6">
              <div className="PrestigiousRightSecMain d-flex justify-content-center gap-3">
                <div className="vertical-carousel up">
                  {images1.concat(images1).map((img, index) => (
                    <Image key={index} src={img} alt="award" />
                  ))}
                </div>
                <div className="vertical-carousel down">
                  {images2.concat(images2).map((img, index) => (
                    <Image key={index} src={img} alt="award" />
                  ))}
                </div>
                <div className="vertical-carousel up">
                  {images3.concat(images3).map((img, index) => (
                    <Image key={index} src={img} alt="award" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
