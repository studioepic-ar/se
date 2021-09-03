import React from "react";
import "./About.styles.scss";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="main-cont">
      <img
        src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
        id="img-cont"
        alt=""
      />
      <div className="sub-cont" data-aos="fade-left">
        <p className="abt text-4xl text-white opacity-100">ABOUT US</p>
        <p className="desc text-2xl text-white opacity-100">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default About;
