import React from "react";
import "./ContactPage.styles.scss";
import "aos/dist/aos.css";
import * as Icon from "react-bootstrap-icons";
import NavBar from "../../components/NavBar/Navbar.component";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <div className="cont-main">
        <div className="sep-div-form ">
          <div data-aos="fade-down">
            <p className="text-4xl text-center mt-8 tracking-wider">
              GET IN TOUCH
            </p>
            <p className="text-2xl text-center mt-2 mb-2 tracking-wide">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <form action="" data-aos="fade-up" className="mb-6">
            <div className="m-auto  w-4/5 sm:w-3/5 md:w-2/4 justify-center">
              <div className="my-4">
                <p className="mb-1">Email:</p>
                <input
                  required
                  type="email"
                  name="email"
                  id=""
                  className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
                />
              </div>
              <div className="my-4">
                <p className="mb-1">Full Name:</p>
                <input
                  required
                  type="text"
                  name="fullName"
                  id=""
                  className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
                />
              </div>

              <div className="my-4">
                <p className="mb-1">Contact Number:</p>
                <input
                  required
                  type="number"
                  name="number"
                  id=""
                  className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
                />
              </div>
              <div className="my-4">
                <p className="mb-1">Project Type:</p>
                <select
                  id="projectType"
                  className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-10 outline-none"
                >
                  <option value="Architecture" selected>
                    Architecture
                  </option>
                  <option value="Interior_Design">Interior Design</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Master_Planning">Master Planning</option>
                </select>
              </div>
              <div className="my-4">
                <p className="mb-1">Mesaage:</p>
                <textarea
                  required
                  rows="8"
                  type="text"
                  name="message"
                  id=""
                  className="border border-solid bg-gray-100 rounded-2xl w-full p-2 h-auto outline-none"
                />
              </div>
              <button
                type="submit"
                className="send-btn border-solid rounded-3xl hover:bg-gray-300 hover:text-black  text-lg px-3 py-1 text-white bg-black transition duration-500 ease-in-out "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="sep-div-cont border-solid border-4 flex flex-col mt-8">
          <div data-aos="fade-right">
            <p className="text-3xl text-center tracking-wider underline mb-2">
              CONTACT US
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-row items-center m-2 hover:underline"
          >
            <Icon.Envelope size={25} className="mr-4 " />
            <a href="mailto:studioepic.ar@gmail.com">studioepic.ar@gmail.com</a>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-row items-center m-2 hover:underline"
          >
            <Icon.Telephone size={25} className="mr-4 " />
            <a href="tel:7338227902">PRAJWAL H A: 7338227902</a>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-row items-center m-2 hover:underline"
          >
            <Icon.Telephone size={25} className="mr-4 " />
            <a href="tel:9448230002">ASHOK H B: 9448230002</a>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-row items-center m-2 hover:underline"
          >
            <Icon.Instagram size={25} className="mr-4 " />
            <a href="#">link</a>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-row items-center m-2 hover:underline"
          >
            <Icon.Telegram size={25} className="mr-4 " />
            <a href="#">link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
