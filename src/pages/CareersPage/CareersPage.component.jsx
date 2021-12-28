import React, { useEffect } from "react";
// import styled from "styled-components";
import "aos/dist/aos.css";
import NavBar from "../../components/NavBar/Navbar.component";
import "./CareersPage.styles.scss";
import * as Icon from "react-bootstrap-icons";

import Aos from "aos";
import "aos/dist/aos.css";

const CareersPage = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mb-12">
      <NavBar />
      <div data-aos="fade-down">
        <p className="text-3xl sm:text-4xl text-center mt-8 tracking-wider">
          CAREERS
        </p>
        <p className="text-xl sm:text-2xl text-center mt-2 mb-8 tracking-wide">
          Enter your details below to apply.
        </p>
      </div>
      {/* <form action="" method="POST" data-aos="fade-up"> */}
      <form
        action="https://formsubmit.co/studioepic.ar@gmail.com"
        method="POST"
        data-aos="fade-up"
      >
        <input
          type="hidden"
          name="_subject"
          value="New submission on careers page!"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="table"></input>
        <input
          type="hidden"
          name="_next"
          value="https://studioepic.netlify.app/"
        ></input>
        <div className="m-auto w-4/5 sm:w-3/5 md:w-2/4 lg:w-1/3 justify-center">
          <div className="my-5">
            <p className="mb-1">Email:</p>
            <input
              required
              type="email"
              name="email"
              id=""
              className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p className="mb-1">Full Name:</p>
            <input
              required
              type="text"
              name="fullName"
              id=""
              className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p className="mb-1">Age:</p>
            <input
              required
              type="number"
              name="age"
              id=""
              className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p className="mb-1">Experience:</p>
            <input
              required
              type="text"
              name="experience"
              id=""
              className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p>Resume Link:</p>
            <div
              className="flex flex-row mb-1 align-middle"
              style={{ marginTop: "-3px" }}
            >
              <Icon.InfoCircle
                size={13}
                className="mr-0"
                style={{ marginRight: "2px" }}
              />
              <p style={{ fontSize: "10px" }}>
                Upload your resume in Google Drive, OneDrive or MEGA and paste
                the shared link here.
              </p>
            </div>
            <input
              required
              type="text"
              name="resume"
              id="resume"
              className=" border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p>Portfolio Link:</p>
            <div
              className="flex flex-row mb-1 align-middle"
              style={{ marginTop: "-3px" }}
            >
              <Icon.InfoCircle
                size={13}
                className="mr-0"
                style={{ marginRight: "2px" }}
              />
              <p style={{ fontSize: "10px" }}>
                Upload your portfolio in Google Drive, OneDrive or MEGA and
                paste the shared link here.
              </p>
            </div>
            <input
              required
              type="text"
              name="portfolio"
              id="portfolio"
              className=" border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <div className="my-5">
            <p className="mb-1">Contact Number:</p>
            <input
              required
              type="number"
              name="number"
              id=""
              className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
            />
          </div>
          <button
            type="submit"
            className="border-solid  rounded-3xl hover:bg-gray-300 hover:text-black  text-lg px-3 py-1 text-white bg-black transition duration-500 ease-in-out "
          >
            Submit application
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareersPage;

// email, fname, lname, age, exp, attach portfolio, attach resume

// className="border-solid bg-gray-100 rounded-3xl text-black text-lg px-3 py-1 hover:text-white hover:bg-black transition duration-500 ease-in-out"
