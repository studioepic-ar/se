import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Gallery from "react-grid-gallery";
import NavBar from "../../components/NavBar/Navbar.component";
import { IMAGES } from "./photos";
import Footer from "../../components/Footer/Footer.component";

export default function GalleryPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <p
          className="text-4xl text-center m-8 tracking-wider"
          data-aos="fade-down"
        >
          GALLERY
        </p>
      </div>
      <div data-aos="fade-up">
        <Gallery images={IMAGES} />
      </div>
      <div className="block mt-2">
        <Footer />
      </div>
    </div>
  );
}
