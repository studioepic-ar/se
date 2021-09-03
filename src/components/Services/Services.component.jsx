import React from "react";
import "aos/dist/aos.css";
import "./Services.styles.scss";
import ArchiIcon from "../../assets/services_icons/architecture.png";
import InterIcon from "../../assets/services_icons/interior-design.png";
import LandIcon from "../../assets/services_icons/landscape.png";
import MasPlanIcon from "../../assets/services_icons/master-plan.png";

function Services() {
  return (
    <div className="lg:mb-6">
      <div data-aos="fade-down" className="mb-6">
        <p className="text-4xl text-center tracking-wider">Our Services</p>
        <p className="text-2xl text-center tracking-wider">subtitle</p>
      </div>
      <div className="w-cont">
        <div className="indiv-contL">
          <div className="desc" data-aos="fade-right">
            <p className="text-2xl">Architecture</p>
            <p className="text-xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum!
            </p>
          </div>
          <div className="icon" data-aos="fade-left">
            <img src={ArchiIcon} alt="" />
          </div>
        </div>
        <div className="indiv-contR">
          <div className="desc" data-aos="fade-left">
            <p className="text-2xl">Interior Design</p>
            <p className="text-xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum!
            </p>
          </div>
          <div className="icon" data-aos="fade-right">
            <img src={InterIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="w-cont">
        <div className="indiv-contL">
          <div className="desc" data-aos="fade-right">
            <p className="text-2xl">Landscaping</p>
            <p className="text-xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum!
            </p>
          </div>
          <div className="icon" data-aos="fade-left">
            <img src={LandIcon} alt="" />
          </div>
        </div>
        <div className="indiv-contR">
          <div className="desc" data-aos="fade-left">
            <p className="text-2xl">Master Planning</p>
            <p className="text-xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum!
            </p>
          </div>
          <div className="icon" data-aos="fade-right">
            <img src={MasPlanIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
