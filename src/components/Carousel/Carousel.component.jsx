import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const CImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-image: url(${(props) => props.image});
  height: 100vh;
`;

const CMessage = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  /* height: 45%; */
  bottom: 0;
  display: block;
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.6); */
  color: #fff;
  padding: 1rem;
  text-align: left;
  margin-bottom: 3rem;
  /* margin: 2rem 3rem; */
  letter-spacing: 0.5px;
`;

function SlideShow() {
  return (
    <div className=" top-0 left-0">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        <CImage image="https://i.ibb.co/kmVsQ1s/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg">
        {/* <CImage image="https://i.ibb.co/xXGVsT0/marc-olivier-jodoin-o-Thn-HPkb3p8-unsplash.jpg"> */}
        {/* <CImage image="https://i.ibb.co/k9JRDdJ/li-yang-Co-Wc-Jmb-UCWw-unsplash.jpg"> */}
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light italic lg:w-3/5">
              “One of the great beauties of architecture is that each time, it
              is like life starting all over again.”
            </h1>
            <p className="text-lg sm:text-xl">– Renzo Piano</p>
          </CMessage>
        </CImage>

        <CImage image="https://i.ibb.co/k9JRDdJ/li-yang-Co-Wc-Jmb-UCWw-unsplash.jpg">
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light italic lg:w-3/5">
              “The mother art is architecture. Without an architecture of our
              own we have no soul of our own civilization.”
            </h1>
            <p className="text-lg sm:text-xl">- Frank Lloyd Wright</p>
          </CMessage>
        </CImage>

        <CImage image="https://i.ibb.co/xSxZbHc/kir-simakov-1y5-Pk-TZOMb-Q-unsplash.jpg">
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light italic lg:w-3/5">
            “Architecture should speak of its time and place, but yearn for timelessness.”  
            </h1>
            <p className="text-lg sm:text-xl">
            – Frank Gehry
            </p>
          </CMessage>
        </CImage>
      </Carousel>
    </div>
  );
}

export default SlideShow;
