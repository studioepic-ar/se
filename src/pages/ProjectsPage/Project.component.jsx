import React from "react";
import styled from "styled-components";

// import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../../components/NavBar/Navbar.component";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 300px;
  border: solid 1px;
  background-color: transparent;
  /* background-color: red; */
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://source.unsplash.com/random");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    overflow: hidden;
  }
`;

const ProjectTitle = styled.h1`
  position: absolute;
  bottom: 1.5rem;
  left: 2.5rem;
  letter-spacing: 0.5px;
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
`;

export default function ProjectPage() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div>
      <NavBar />
      <div>
        <p
          className="text-4xl text-center m-8 tracking-wider"
          data-aos="fade-down"
        >
          PROJECTS
        </p>
      </div>
      <div className="flex flex-wrap">
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle data-aos="">Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle>Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle data-aos="">Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle>Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle data-aos="">Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle>Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle data-aos="">Text here</ProjectTitle>
        </ProjectContainer>
        <ProjectContainer data-aos="zoom-in">
          <ProjectImage />
          <ProjectTitle>Text here</ProjectTitle>
        </ProjectContainer>
      </div>
    </div>
  );
}
