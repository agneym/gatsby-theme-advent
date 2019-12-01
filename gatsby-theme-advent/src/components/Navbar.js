import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import media from "../utils/media";

const Container = styled.nav`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.phone`
    padding: 2rem 0;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 0;

  ${media.phone`
    text-align: center;
  `}
`;

const Navbar = ({ title }) => (
  <Container>
    <StyledLink to={"/"}>
      <Title>{title}</Title>
    </StyledLink>
  </Container>
);

export default Navbar;
