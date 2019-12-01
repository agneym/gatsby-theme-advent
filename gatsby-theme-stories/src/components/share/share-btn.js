import React from "react";
import styled from "styled-components";
import { Share } from "react-feather";

const Btn = styled.button`
  padding: 0.5rem 1rem;
  box-shadow: none;
  border: 0.1rem solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const ShareBtn = ({ shareFn }) => {
  return (
    <Btn onClick={shareFn}>
      <Share />
      <span>Share</span>
    </Btn>
  );
};

export default ShareBtn;
