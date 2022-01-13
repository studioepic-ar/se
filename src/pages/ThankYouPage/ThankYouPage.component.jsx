import React from "react";
import * as Icon from "react-bootstrap-icons";
import Footer from "../../components/Footer/Footer.component";
import NavBar from "../../components/NavBar/Navbar.component";
import "./ThankYouPage.styles.scss";

function ThankYouPage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center relative">
        <img
          className="logo-height w-96 opacity-50 absolute "
          src="https://i.ibb.co/gFQ0ZFW/logo-new.png"
          alt=""
        />
        <div className="ty-container z-50 flex flex-col m-auto mt-16 text-center items-center justify-center">
          <header className="tracking-wider text-3xl p-10 sm:p-6">
            <h1>THANK YOU!</h1>
          </header>
          {/* <img src={Logo} alt="" /> */}
          <div className="m-auto flex flex-col items-center">
            <Icon.CheckCircle size={100} />
            <p className="p-10 sm:p-6 text-lg sm:text-xl tracking-wide">
              Thanks a bunch for filling that out. We really appreciate you
              giving us a moment of your time today.
              <br />
              Thanks for being you. We are very excited to connect with you as
              soon as possible!
            </p>
          </div>
        </div>
      </div>
      <div className="sm:mt-2 lg:mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default ThankYouPage;
