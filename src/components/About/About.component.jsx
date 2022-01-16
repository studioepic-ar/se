import React from "react";
import "./About.styles.scss";
import "aos/dist/aos.css";

import AboutPicture from "../../assets/AboutPage/about.jpg";

function About() {
  return (
    <div className="main-cont">
      <img src={AboutPicture} id="img-cont" alt="" data-aos="fade-right" />
      <div className="sub-cont" data-aos="fade-left">
        <p className="abt text-2xl sm:text-3xl text-black opacity-100">
          ABOUT US{" "}
        </p>
        <p className="desc text-base sm:text-lg text-black opacity-100">
          <span></span>
          <br />
          STUDIO EPIC is a full-service architecture firm based in Shivamogga,
          Karnataka. The firm offers Architecture, Planning and Interior design
          services in a diverse range of building types and styles, including
          but not limited to residential, commercial, and civic projects. Our
          ethos is for elegant, timeless and unique architecture that integrates
          the landscape as part of the solution. We continue to innovate and
          apply the latest technologies in sustainable design practices.
        </p>
      </div>
    </div>
  );
}

export default About;
