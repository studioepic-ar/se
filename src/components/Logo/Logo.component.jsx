import React from "react";
import "./Logo.styles.scss";

export default function Logo() {
  return (
    <div className="main-logo">
      <div className="header-logo">
        <h1 style={{ fontFamily: "Mulish" }}>STUDIO EPIC</h1>
      </div>
      <div className="subHeader-logo">
        <h3
          style={{
            lineHeight: "0px",
            fontWeight: 900,
            fontFamily: "Mulish",
          }}
        >
          ARCHITECTURE | INTERIORS | LANDSCAPING
        </h3>
      </div>
    </div>
  );
}
