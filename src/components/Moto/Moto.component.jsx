import React from "react";
import "./Moto.styles.scss";
import "aos/dist/aos.css";

function Moto() {
  return (
    <div className="main-cont1">
      <img
        src="https://source.unsplash.com/zh7GEuORbUw/600x799"
        id="img-cont1"
        alt=""
      />
      <div className="sub-cont1" data-aos="fade-left">
        <p className="abt text-2xl md:text-4xl text-white opacity-100 text-center">
          OUR MOTO
        </p>
        <p className="desc text-lg md:text-2xl text-white opacity-100 text-center">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default Moto;

// <div>
//   <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt="" />
//   <p>OUR MOTO</p>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// </div>;
