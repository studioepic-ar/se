import React from "react";
import SlideShow from "../../components/Carousel/Carousel.component";
import NavBar from "../../components/NavBar/Navbar.component";

function Homepage() {
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
