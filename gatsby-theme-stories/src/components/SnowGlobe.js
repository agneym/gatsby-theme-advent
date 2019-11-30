import React, { memo } from "react";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
      >
        <path
          fill="#C9E9F4"
          d="M485.417 229.286c0 126.637-102.709 229.288-229.417 229.288S26.583 355.923 26.583 229.286C26.583 102.651 129.292 0 256 0c126.707 0 229.417 102.651 229.417 229.286z"
        ></path>
        <g fill="#FFF">
          <circle cx="104.02" r="12.935">
            <animate
              attributeName="cy"
              dur="8s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="364.868" r="8.935">
            <animate
              attributeName="cy"
              dur="6s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="136.359" r="6.935">
            <animate
              attributeName="cy"
              dur="4s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="420.916" r="10.935">
            <animate
              attributeName="cy"
              dur="4s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="7.5s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="390.74" r="7.935">
            <animate
              attributeName="cy"
              dur="6.5s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="95.399" r="4.935">
            <animate
              attributeName="cy"
              dur="4.5s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="405.399" r="4.935">
            <animate
              attributeName="cy"
              dur="4.5s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="305.399" r="6.935">
            <animate
              attributeName="cy"
              dur="4.5s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <circle cx="405.399" r="7.935">
            <animate
              attributeName="cy"
              dur="10.5s"
              from="0"
              repeatCount="indefinite"
              to="400"
            ></animate>
            <animate
              attributeName="fill-opacity"
              dur="8s"
              keyTimes="0; 1; 2; 3; 4; 5; 6; 7; 8;"
              repeatCount="indefinite"
              values="1; 1; 1; 0.8; 0.6; 0.4; 0.2; 0"
            ></animate>
          </circle>
          <path d="M153.135 369.316c0 21.995 6.916 42.374 18.688 59.092h168.355c11.772-16.718 18.688-37.097 18.688-59.092 0-38.02-20.704-71.141-51.411-88.935 17.448-14.668 28.555-36.621 28.555-61.194 0-44.165-35.818-79.964-80.008-79.964-44.193 0-80.011 35.8-80.011 79.964 0 24.575 11.107 46.526 28.559 61.194-30.712 17.794-51.415 50.915-51.415 88.935z"></path>
        </g>
        <path
          fill="#414042"
          d="M153.135 369.316c0 21.995 6.916 42.374 18.688 59.092h33.895c-11.776-16.718-18.703-37.093-18.703-59.092 0-38.02 20.704-71.141 51.413-88.935-17.451-14.668-28.559-36.621-28.559-61.194 0-38.354 27.019-70.383 63.071-78.152a80.332 80.332 0 00-16.94-1.812c-44.193 0-80.011 35.8-80.011 79.964 0 24.575 11.107 46.526 28.559 61.194-30.71 17.794-51.413 50.915-51.413 88.935z"
          enableBackground="new"
          opacity="0.1"
        ></path>
        <path
          fill="#414042"
          d="M73.107 229.286c0-118.787 90.373-216.467 206.155-228.119A232.207 232.207 0 00256 0C129.292 0 26.583 102.651 26.583 229.286c0 126.637 102.708 229.288 229.417 229.288 7.853 0 15.612-.397 23.263-1.166C163.481 445.757 73.107 348.074 73.107 229.286z"
          opacity="0.1"
        ></path>
        <g fill="#636052">
          <path d="M233.814 216.466c0 4.673-3.774 8.463-8.431 8.463-4.656 0-8.43-3.79-8.43-8.463 0-4.673 3.774-8.463 8.43-8.463 4.655.001 8.431 3.79 8.431 8.463zM295.049 216.466c0 4.673-3.774 8.463-8.429 8.463-4.656 0-8.431-3.79-8.431-8.463 0-4.673 3.775-8.463 8.431-8.463 4.655.001 8.429 3.79 8.429 8.463z"></path>
        </g>
        <path
          fill="#EF6B3A"
          d="M272.041 235.435c0 8.082-6.53 14.636-14.582 14.636-8.055 0-14.584-6.553-14.584-14.636 0-8.084 6.529-14.637 14.584-14.637 8.052 0 14.582 6.553 14.582 14.637z"
        ></path>
        <path
          fill="#F0D355"
          d="M418.504 438.846c0 15.813-12.836 28.626-28.674 28.626H122.172c-15.839 0-28.674-12.813-28.674-28.626 0-15.811 12.836-28.623 28.674-28.623h267.657c15.838.001 28.675 12.811 28.675 28.623z"
        ></path>
        <path
          fill="#414042"
          d="M140.022 438.846c0-15.811 12.836-28.623 28.674-28.623h-46.524c-15.839 0-28.674 12.811-28.674 28.623 0 15.813 12.836 28.626 28.674 28.626h46.524c-15.839 0-28.674-12.813-28.674-28.626z"
          opacity="0.1"
        ></path>
        <path
          fill="#ED5D51"
          d="M447.182 503.519c0 4.687-3.8 8.481-8.498 8.481H73.316c-4.697 0-8.498-3.794-8.498-8.481v-48.77c0-4.685 3.801-8.479 8.498-8.479h365.367c4.698 0 8.498 3.794 8.498 8.479l.001 48.77z"
        ></path>
        <path
          fill="#414042"
          d="M111.343 503.519v-48.77c0-4.685 3.801-8.479 8.498-8.479H73.316c-4.697 0-8.498 3.794-8.498 8.479v48.77c0 4.687 3.801 8.481 8.498 8.481h46.524c-4.696 0-8.497-3.794-8.497-8.481z"
          opacity="0.1"
        ></path>
        <path
          fill="#FFF"
          d="M432.533 159.66c-4.906 0-9.607-2.776-11.83-7.512-18.336-39.03-50.042-70.381-89.279-88.278-6.563-2.994-9.456-10.741-6.464-17.305 2.994-6.564 10.743-9.454 17.305-6.463 44.864 20.464 81.117 56.313 102.081 100.94 3.068 6.529.261 14.308-6.268 17.375a13.002 13.002 0 01-5.545 1.243z"
        ></path>
      </svg>
    </div>
  );
}

export default memo(SnowGlobe);
