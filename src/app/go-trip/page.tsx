import Image from "next/image";
import React from "react";
import styles from "./goTrip.module.css";

function page() {
  return (
    <div>
      <Image
        src={"/Images/go-trip.png"}
        alt="Go-trip"
        width={1000}
        height={100}
        className={`${styles.goTripImage}`}
      ></Image>
      <div className={`${styles.goTripTextParent}`}>
        <h1 className={`welcomeHead`}>Welcome to Go Trip</h1>
        <p className={`${styles.goTripPara1}`}>
          Discover the world with ease through Go Trip, your go-to platform for
          hassle-free travel booking. Our platform is designed to make planning
          your dream vacation simple and enjoyable. Explore breathtaking
          destinations, book unforgettable trips, and access all the information
          you need for a seamless experience.
        </p>

        <h2 className={`${styles.exploreHeading}`}>Explore Our Offerings</h2>
        <ul>
          <li className={`${styles.li}`}>
            <strong>Top Destinations:</strong> Discover hand-picked travel spots
            tailored to your interests.
          </li>
          <li className={`${styles.li}`}>
            <strong>Seamless Bookings:</strong> Enjoy quick and secure booking
            options with a user-friendly interface.
          </li>
          <li className={`${styles.li}`}>
            <strong>Travel Insights:</strong> Get destination highlights,
            must-visit places, and local tips.
          </li>
          <li className={`${styles.li}`}>
            <strong>24/7 Customer Support:</strong> Reach us anytime for
            assistance on your journey.
          </li>
        </ul>

        <p className={`${styles.goTripTextPara2}`}>
          At Go Trip, we are passionate about connecting travelers with their
          ideal destinations. Our mission is to make travel planning as
          enjoyable and straightforward as the trip itself. Have questions or
          need help with your booking? Our team is here to assist you. Reach out
          via our Contact page, and we&apos;ll make sure you’re ready for your next
          adventure! Start your journey with Go Trip and explore the beauty of
          travel!
        </p>

        <div className={`${styles.vistTextandLinkParent}`}>
          <h1 className={`${styles.visitText}`}>Visit our platform</h1>
          <a
            target="_blank"
            href="https://the-go-trip.netlify.app/"
            className={`${styles.goTripVisitLink}`}
          >
            Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
