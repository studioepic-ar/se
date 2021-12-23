import React from "react";
import About from "../../components/About/About.component";
import Moto from "../../components/Moto/Moto.component";
import NavBar from "../../components/NavBar/Navbar.component";
import Services from "../../components/Services/Services.component";
import StepsWeFollow from "../../components/StepsWeFollow/StepsWeFollow.component";
// import Aos from "aos";

function AboutPage() {
  return (
    <div className="mb-12">
      <NavBar />
      <About />
      <Moto />
      <Services />
      <StepsWeFollow />
    </div>
  );
}

export default AboutPage;
