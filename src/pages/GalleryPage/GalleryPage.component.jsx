import React from "react";
import "aos/dist/aos.css";
import Gallery from "react-grid-gallery";
import NavBar from "../../components/NavBar/Navbar.component";
import { IMAGES } from "./photos";

export default function GalleryPage() {
  return (
    <div>
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
    </div>
  );
}
