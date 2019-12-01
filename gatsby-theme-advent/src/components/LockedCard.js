import React from "react";
import styled from "styled-components";
import { Lock } from "react-feather";

import StyledCard from "./Card";

const Card = styled(StyledCard)`
  position: unset;
  background-color: #fcfcfc;
  color: rgba(0, 0, 0, 0.7);
`;

function LockedCard({ num }) {
  return (
    <Card>
      <div>
        <Lock />
      </div>
      {num}
    </Card>
  );
}

export default LockedCard;
