import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UnlockedChapter from "./UnlockedChapter";
import LockedCard from "./LockedCard";
import SnowGlobe from "./SnowGlobe";

const Container = styled.main`
  width: 80%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 25rem;
  grid-gap: 2.5rem 5rem;
`;

function Listing({ data }) {
  const [lockedCards, setLockedCards] = useState([]);
  useEffect(() => {
    const unlockedCards = data.length;
    /* TODO: make this number based on param */
    const lockedCards = 25 - unlockedCards;
    setLockedCards(
      Array(lockedCards)
        .fill(1)
        .map((_, index) => unlockedCards + index + 1)
    );
  }, [data.length]);
  return (
    <Container>
      {data.map(({ node }, index) => (
        <UnlockedChapter key={node.fields.slug} node={node} num={index + 1} />
      ))}
      {lockedCards.map(cardNum => (
        <LockedCard num={cardNum} />
      ))}
      <SnowGlobe />
    </Container>
  );
}

export default Listing;
