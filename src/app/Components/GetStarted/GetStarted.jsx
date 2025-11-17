import Image from "next/image";
import "./GetStarted.css";
import pic1 from '@/app/images/pic1.png'
import pic2 from '@/app/images/pic2.png'
import pic3 from '@/app/images/pic3.png'
import overlayImg from '@/app/images/dash.png'

export default function ThreeSteps() {
  return (
   <>
     <div className="GetStartedMainSection">
  <div className="OverlayImgSec">
    <Image src={overlayImg} alt="dotedhorizontalImg" className="overlayImg"/>
  </div>

   <div className="container text-center GetStartedContainer py-5 three-steps">
      <p className="process-label">Our Working Process</p>
      <h2 className="steps-title">Get Started In Just 3 Steps</h2>

      <div className="row align-items-center GetStartedMajor mt-5">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="step-card">
            <div className="step-number1">01</div>
            <Image src={pic1} alt="Make an enquiry" width={200} height={200}  className="img-fluid rounded" />
            <h4 className="mt-3">Make An Enquiry</h4>
            <p>Feel free to reach out and make an enquiry. We're here to assist you.</p>
          </div>
        </div>

        <div className="col-md-4 mb-5 mb-md-0">
          <div className="step-card">
            <div className="step-number2">02</div>
            <Image src={pic2} alt="Create a NDIS plan" width={200} height={200}  className="img-fluid rounded" />
            <h4 className="mt-3">Create A NDIS Plan</h4>
            <p>Let's craft a personalized NDIS plan to address your specific needs.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="step-card">
            <div className="step-number3">03</div>
            <Image src={pic3} alt="Start exceptional care" width={200} height={200} className="img-fluid rounded" />
            <h4 className="mt-3">Start Exceptional Care</h4>
            <p>Start your journey with us, where we prioritize your exceptional care.</p>
          </div>
        </div>
      </div>
    </div>

    </div>

   </>
  );
}