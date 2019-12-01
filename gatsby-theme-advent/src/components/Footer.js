import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 5rem 2rem;
`;

function Footer() {
  return (
    <Container>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Container>
  );
}

export default Footer;
