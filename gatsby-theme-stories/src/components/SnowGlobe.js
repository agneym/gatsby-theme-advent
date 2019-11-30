import React from "react";

import snowGlobeImg from "../utils/snow-globe.svg";

function SnowGlobe() {
  return (
    <div
      css={`
        grid-column: 2 / 4;
        grid-row: 3 / 5;
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
