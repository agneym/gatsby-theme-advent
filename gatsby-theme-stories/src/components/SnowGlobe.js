import React from "react";

import snowGlobeImg from "../utils/snow-globe.svg";

function SnowGlobe() {
  return (
    <div
      css={`
        grid-column-start: 2;
        grid-row-start: 3;
        grid-column-end: 4;
        grid-row-end: 5;
        display: block;
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 60%;
      `}
    >
      <img
        src={snowGlobeImg}
        alt=""
        css={`
          width: 100%;
        `}
      />
    </div>
  );
}

export default SnowGlobe;
