import React, { useEffect } from "react";
import About from "../../components/About/About.component";
import Moto from "../../components/Moto/Moto.component";
import NavBar from "../../components/NavBar/Navbar.component";
import Services from "../../components/Services/Services.component";
import StepsWeFollow from "../../components/StepsWeFollow/StepsWeFollow.component";
import Teams from "../../components/Teams/Teams.component";
import Footer from "../../components/Footer/Footer.component";
import { Helmet } from "react-helmet";

import Aos from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>STUDIO EPIC - About Us</title>
        <meta
          name="description"
          content="STUDIO EPIC is a full-service architecture firm based in Shivamogga, Karnataka. The firm offers Architecture, Planning and Interior design services in a diverse range of building types and styles, including but not limited to residential, commercial, and civic projects. Our ethos is for elegant, timeless and unique architecture that integrates the landscape as part of the solution. We continue to innovate and apply the latest technologies in sustainable design practices."
        />
      </Helmet>
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
