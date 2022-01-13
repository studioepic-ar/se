import React, { useEffect } from "react";
import About from "../../components/About/About.component";
import Moto from "../../components/Moto/Moto.component";
import NavBar from "../../components/NavBar/Navbar.component";
import Services from "../../components/Services/Services.component";
import StepsWeFollow from "../../components/StepsWeFollow/StepsWeFollow.component";
import Teams from "../../components/Teams/Teams.component";
import Footer from "../../components/Footer/Footer.component";

import Aos from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <NavBar />
      <About />
      <Moto />
      <Services />
      <Teams />
      <StepsWeFollow />
      <Footer />
    </div>
  );
}

export default AboutPage;
