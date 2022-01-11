import React from "react";
import * as Icon from "react-bootstrap-icons";
import NavBar from "../../components/NavBar/Navbar.component";

function ThankYouPage() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col m-auto  text-center items-center justify-center">
        <header className="tracking-wider text-3xl p-10 sm:p-6">
          <h1>THANK YOU!</h1>
        </header>

        <div className="m-auto flex flex-col items-center">
          <Icon.CheckCircle size={100} />
          <p className="p-10 sm:p-6 text-lg sm:text-xl tracking-wide">
            Thanks a bunch for filling that out. We really appreciate you giving
            us a moment of your time today.
            <br />
            Thanks for being you. We are very excited to connect with you as
            soon as possible!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
