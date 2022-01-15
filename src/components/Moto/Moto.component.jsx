import React from "react";
import "./Moto.styles.scss";
import "aos/dist/aos.css";

function Moto() {
  return (
    <div className="main-cont1 h-300 flex">
      <img
        src="https://i.ibb.co/QMWjZSD/moto.jpg"
        id="img-cont1"
        alt=""
        style={{ filter: "blur(0.6px)" }}
        data-aos="fade-right"
      />
      {/* <div className="sub-cont1" data-aos="fade-left"> */}
      <div
        className="flex flex-col m-auto items-center text-center z-50 p-4 sm:p-5 md:p-6 lg:p-8"
        data-aos="fade-left"
      >
        <div className="abt text-2xl md:text-3xl lg:text-4xl text-black opacity-100 text-center">
          OUR MOTO
        </div>
        <div className="desc text-sm md:text-base lg:text-xl text-black opacity-100 text-center">
          <span></span>
          <br />
          We STUDIO EPIC Architects offer solutions that are elegantly
          distinctive, sophisticated through simplicity, efficient and
          innovative. Our designs tailor detailing and material selection to
          building style and site, and draws on authentic detailing as
          appropriate for each project.
          <span></span>
          <br />
          <span></span>
          <br />
          Our design philosophy is governed by the idea that all designed
          spaces, including transitional exterior spaces, have emotional power.
          Our designs are sensitive to the climate, environment, and geography.
          Architecture therefore becomes a celebration of the site’s natural
          beauty, designed to provide positive spatial experiences.
        </div>
      </div>
    </div>
  );
}

export default Moto;