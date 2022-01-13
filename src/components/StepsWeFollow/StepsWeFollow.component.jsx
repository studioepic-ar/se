import React from "react";
import "aos/dist/aos.css";
import ForOnlineServices from "../../assets/services_icons/ForOnlineServices.jpg";

export default function StepsWeFollow() {
  return (
    <div className="m-auto mt-8">
      <p
        data-aos="fade-down"
        className="text-3xl sm:text-4xl text-center tracking-wider mb-3"
      >
        For Online Services
      </p>
      <div data-aos="fade-up">
        <img
          src={ForOnlineServices}
          alt="ONLINE-SERVICE-AROUND-INDIA"
          border="0"
          className="cursor-pointer m-auto w-4/5 sm:w-3/4"
        />
      </div>
    </div>
  );
}
