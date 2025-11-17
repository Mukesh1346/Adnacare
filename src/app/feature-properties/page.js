"use client";
import Image from "next/image";
import styles from "./FeaturedProperties.module.css";
import Header from "../Components/Header/Header";
import Banner from '@/app/images/Banner4.jpg'
import pic1 from '@/app/images/features2.jpg'
import pic2 from '@/app/images/features1.jpg'
export default function page() {
  const properties = [
    {
      id: 1,
      title: "Quakers Hill NSW 2763 – 7 Properties for SIL/MTA/STA (Respite)",
      image:pic2,
    },
    {
      id: 2,
      title: "Marsden Park NSW 2765 for SIL/MTA/STA (Respite)",
      image: pic2,
    },
  ];

  return (
   <>
   <div>
    <Header Banner={Banner} subtitle={"MADESTIEN PARK"}/>
   </div>
    <section className={`container  ${styles.featuredSection}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className={styles.heading}>Featured Properties</h2>

        <a href="/properties" className={`btn btn-primary ${styles.seeAllBtn}`}>
          See all properties →
        </a>
      </div>

      <p className={styles.subText}>
        We have properties all over Sydney and Interstate for NDIS participants.
        We offer short term (respite) and long term accommodation.
      </p>

      <div className="row gy-4">
        {properties.map((item) => (
          <div className="col-12 col-md-6" key={item.id}>
            <div className={`card h-100 border-0 shadow-sm ${styles.propertyCard}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  width={800}
                  height={500}
                  alt={item.title}
                  className="card-img-top"
                />
              </div>

              <div className="card-body">
                <h6 className={styles.cardTitle}>{item.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   </>
  );
}
