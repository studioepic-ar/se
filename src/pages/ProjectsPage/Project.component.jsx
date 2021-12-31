import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "../../components/NavBar/Navbar.component";

import { Project } from "./ProjectData";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  height: 350px;
  border: solid 1px;
  background-color: transparent;
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
  background-image: url(${(props) => props.projectUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 1500ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    transform: scale(1.05);
    transition: transform 1500ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    overflow: hidden;
  }
`;

const ProjectTitle = styled.p`
  position: absolute;
  bottom: 1.5rem;
  /* left: 2.5rem; */
  width: 100%;
  margin: auto;
  letter-spacing: 0.5px;
  background-color: #00000021;
  color: white;
  font-weight: 600;
  padding: 3px;
  text-align: center;

  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1279px) {
    font-size: 18px;
  }
`;

export default function ProjectPage() {
  const [projectItems, setProjectItems] = useState({ Project });
  const items = projectItems.Project.items;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <p
          className="text-3xl sm:text-4xl text-center m-8 tracking-wider"
          data-aos="fade-down"
        >
          PROJECTS
        </p>
      </div>
      <div className="flex flex-wrap">
        {items.map(({ id, projectTitle, projectImage }) => (
          <ProjectContainer data-aos="zoom-in">
            <ProjectImage projectUrl={projectImage} />
            <ProjectTitle>{projectTitle}</ProjectTitle>
          </ProjectContainer>
        ))}
      </div>
    </div>
  );
}
