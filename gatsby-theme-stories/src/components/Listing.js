import React from "react";
import styled from "styled-components";

const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 6fr;
`;

function Listing({ data }) {
  console.log(data);
  return (
    <Container>
      {data.map(({ node }, index) => (
        <p>{index + 1}</p>
      ))}
    </Container>
  );
}

export default Listing;
