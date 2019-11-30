import React from "react";
import styled from "styled-components";

import UnlockedChapter from "./UnlockedChapter";

const Container = styled.main`
  width: 80%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 25rem;
  grid-gap: 2.5rem 5rem;
`;

function Listing({ data }) {
  return (
    <Container>
      {data.map(({ node }, index) => (
        <UnlockedChapter key={node.fields.slug} node={node} num={index + 1} />
      ))}
    </Container>
  );
}

export default Listing;
