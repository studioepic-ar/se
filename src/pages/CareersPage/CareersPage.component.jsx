import React from "react";
// import styled from "styled-components";
import "aos/dist/aos.css";
import NavBar from "../../components/NavBar/Navbar.component";
import "./CareersPage.styles.scss";

// const CDiv = styled.div``;

// const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
//   border-radius: 30px;
//   border: solid;
// `;

const CareersPage = (props) => {
  // const hiddenFileInput = React.useRef(null);

  // const handleClick = (event) => {
  //   hiddenFileInput.current.click();
  // };
  // const handleChange = (event) => {
  //   const fileUploaded = event.target.files[0];
  //   props.handleFile(fileUploaded);
  // };

  function thankYou(){
    alert("Thank you for applying. We look forward to take you through our selection process.")
  }

  return (
    <div className="mb-12">
      <NavBar />
      <div data-aos="fade-down">
        <p className="text-4xl text-center mt-8 tracking-wider">CAREERS</p>
        <p className="text-2xl text-center mt-2 mb-8 tracking-wide">
          Enter your details below to apply.
        </p>
      </div>
      {/* <form action="" method="POST" data-aos="fade-up"> */}
      <form action="https://formsubmit.co/studioepic.ar@gmail.com" method="POST" data-aos="fade-up">
      <input type="hidden" name="_subject" value="New submission on careers page!"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_template" value="table"></input>
      <input type="hidden" name="_next" value="https://studioepic.netlify.app/"></input>
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
            <p className="mb-1">Resume Link:</p>
            <input
              required
              type="text"
              name="resume"
              id="resume"
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
            onClick={thankYou}
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
