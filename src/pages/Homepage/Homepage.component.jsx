import React, { useEffect } from "react";
import SlideShow from "../../components/Carousel/Carousel.component";
import NavBar from "../../components/NavBar/Navbar.component";

import Aos from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative">
      <div className="absolute w-full">
        <NavBar />
      </div>
      <SlideShow />
    </div>
  );
}

export default Homepage;
