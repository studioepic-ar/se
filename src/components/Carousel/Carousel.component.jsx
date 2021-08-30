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
        <CImage image="https://source.unsplash.com/user/erondu/1600x900">
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-lg sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos
              sequi voluptate nostrum earum delectus ea est cupiditate, soluta
              numquam!
            </p>
          </CMessage>
        </CImage>

        <CImage image="https://source.unsplash.com/random/1600x900">
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-lg sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos
              sequi voluptate nostrum earum delectus ea est cupiditate, soluta
              numquam!
            </p>
          </CMessage>
        </CImage>

        <CImage image="https://source.unsplash.com/collection/190727/1600x900">
          <CMessage>
            <h1 className="text-2xl sm:text-3xl font-light">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-lg sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos
              sequi voluptate nostrum earum delectus ea est cupiditate, soluta
              numquam!
            </p>
          </CMessage>
        </CImage>
      </Carousel>
    </div>
  );
}

export default SlideShow;
