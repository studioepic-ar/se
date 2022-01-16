import React, { useEffect } from "react";
import SlideShow from "../../components/Carousel/Carousel.component";
import NavBar from "../../components/NavBar/Navbar.component";
import { Helmet } from "react-helmet";

import Aos from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative">
      <Helmet>
        <title>STUDIO EPIC - Architecture Firm</title>
        <meta
          name="description"
          content="We offer Architecture, Planning, and Interior design services in a diverse range of building types and styles, including residential, commercial, and civic projects."
        />
      </Helmet>
      <div className="absolute w-full">
        <NavBar />
      </div>
      <SlideShow />
    </div>
  );
}

export default Homepage;
