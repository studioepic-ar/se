import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { CarouselData } from "./CarouselData";

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
  /* background-color: #00000021; */
  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  font-weight: 600;

  @media only screen and (min-width: 1024px) {
    width: 55%;
  }
`;

function SlideShow() {
  const [carouselItems, setCarouselItems] = useState({ CarouselData });
  const items = carouselItems.CarouselData.items;

  return (
    <div className="top-0 left-0">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        {items.map(({ id, imageUrl, heading, subHeading }) => (
          <CImage image={imageUrl} id={id}>
            <CMessage>
              <h1 className="text-2xl font-medium tracking-wide text-black">
                {heading}
              </h1>
              <p className="text-lg italic font-normal tracking-wide text-black">
                {subHeading}
              </p>
            </CMessage>
          </CImage>
        ))}
      </Carousel>
    </div>
  );
}

export default SlideShow;
