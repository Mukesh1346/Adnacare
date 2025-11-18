import Image from "next/image";
import './ComunityDetails.css'
import Pic1 from "@/app/images/Comunity1.jpg"
import Pic2 from "@/app/images/ServiceHover1.png"
import Pic3 from "@/app/images/ServiceHover2.png"
import Pic4 from "@/app/images/ServiceHover3.png"
import Pic5 from "@/app/images/ServiceHover4.png"
import InquiryForm from "../InquiryForm/InquiryForm";

export default function CommunityParticipation() {
  return (
    <div className="container community-wrapper ">
      {/* HERO SECTION */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="fw-bold  ThemeTitle CommunityTitle mb-3">Our Community Participation Approach</h1>
          <p className="lead paratitle">
            Our experienced support coordinators take the time to understand every
            participants needs, interests, and goals. We tailor community support
            to empower independence, wellbeing, and meaningful engagement.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <Image src={Pic1} alt="community" width={500} height={350} className="img-fluid DetailsMainImg rounded shadow" />
        </div>
      </div>

      {/* SECTION CARDS */}
      <div className="row g-4 mb-5">
        {[
          {
            title: "Understanding Our Participants",
            text: "We recognise that each individual has unique strengths and interests. Our support is personalised and outcome-focused, ensuring meaningful growth and participation.",
            img: Pic2,
          },
          {
            title: "Planning the Right Activities",
            text: "We collaboratively plan activities based on personal goals and abilities, including creative, educational, fitness, and skill-based programs.",
            img: Pic3,
          },
          {
            title: "Expanding Your Horizons",
            text: "We encourage exploration and discovery through new community experiences, helping participants build confidence and broaden their interests.",
            img: Pic4,
          },
          {
            title: "Building Friendships & Connections",
            text: "Community is central to wellbeing. We help participants foster real friendships and meaningful social involvement.",
            img: Pic5,
          },
        ].map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <Image src={item.img} alt={item.title} width={400} height={250} className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="small mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INQUIRY FORM */}
      <div>
        <InquiryForm/>
      </div>
    </div>
  );
}
