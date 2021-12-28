import React from "react";
import "aos/dist/aos.css";
import "./Services.styles.scss";
import ArchiIcon from "../../assets/services_icons/architecture.png";
import InterIcon from "../../assets/services_icons/interior-design.png";
import LandIcon from "../../assets/services_icons/landscape.png";
import MasPlanIcon from "../../assets/services_icons/master-plan.png";

function Services() {
  return (
    <div className="md:mb-16">
      <div data-aos="fade-down" className="">
        <p className="text-3xl sm:text-4xl text-center tracking-wider">
          Our Services
        </p>
      </div>
      <div className="w-cont">
        <div className="indiv-contL">
          <div className="desc" data-aos="fade-right">
            <p className="text-xl sm:text-2xl">Architecture</p>
            <p className="text-lg sm:text-lg opacity-80">
              RESIDENTIAL, COMMERCIAL,
              <span></span>
              <br />
              INDUSTRIAL, INSTITUTIONAL
              <span></span>
              <br />& HOSPITALITY
            </p>
          </div>
          <div className="icon" data-aos="fade-left">
            <img src={ArchiIcon} alt="" style={{ width: "65px" }} />
          </div>
        </div>
        <div className="indiv-contR">
          <div className="desc" data-aos="fade-left">
            <p className="text-xl sm:text-2xl">Landscaping</p>
            <p className="text-lg sm:text-lg opacity-80">
              RESIDENTIAL, INSTITUTIONAL
              <span></span>
              <br />
              AND URBAN SPACES
            </p>
          </div>
          <div className="icon" data-aos="fade-right">
            <img src={LandIcon} alt="" style={{ width: "65px" }} />
          </div>
        </div>
      </div>
      <div className="w-cont">
        <div className="indiv-contL">
          <div className="desc" data-aos="fade-right">
            <p className="text-xl sm:text-2xl">Interior Design</p>
            <p className="text-lg sm:text-lg opacity-80">RESIDENTIAL & COMMERCIAL</p>
          </div>
          <div className="icon" data-aos="fade-left">
            <img src={InterIcon} alt="" />
          </div>
        </div>
        <div className="indiv-contR">
          <div className="desc" data-aos="fade-left">
            <p className="text-xl sm:text-2xl">Master Planning</p>
            <p className="text-lg sm:text-lg opacity-80">LAYOUT PLANNING/TOWNSHIPS</p>
          </div>
          <div className="icon" data-aos="fade-right">
            <img src={MasPlanIcon} alt="" style={{ width: "65px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

