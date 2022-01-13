import React from "react";

function Footer() {
  var date = new Date().getFullYear();
  return (
    <div className="m-auto text-center">
      <h1 className="tracking-wider opacity-80 p-4 text-xs sm:text-sm">
        STUDIO EPIC LLP ® 2021-{date} | All Rights Reserved
      </h1>
    </div>
  );
}

export default Footer;
