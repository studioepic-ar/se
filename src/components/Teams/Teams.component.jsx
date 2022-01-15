import React, { useState} from "react";
import "aos/dist/aos.css";
import "./Teams.styles.scss";
import { TeamsData } from "./TeamsData";

function Teams() {
  const [teamData, setTeamData] = useState({ TeamsData });
  const items = teamData.TeamsData.items;
  console.log(items);

  return (
    <div>
      <div data-aos="fade-down" className="m-auto w-1/2">
        <p className="text-3xl sm:text-4xl text-center tracking-wider">
          Our Team
        </p>
      </div>
      <div className="m-auto w-full sm:w-3/4 flex flex-wrap justify-around">
        {items.map(({ id, memberName, memberRole, memberImage }) => (
          <div data-aos="fade-up" className="people" id={id}>
            <img
              className="image w-36 h-36 sm:w-44 sm:h-44 my-3"
              src={memberImage}
              alt={memberName}
            />
            <p className="text-sm tracking-wider">{memberName}</p>
            <p className="text-sm tracking-wider">{memberRole}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
