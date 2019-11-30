import React from "react";
import { Gift } from "react-feather";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";

const Container = styled.article`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 2px 0px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.listing.unlocked.color};
  font-size: 4rem;
`;

function UnlockedChapter({ node, num }) {
  return (
    <Location>
      {({ location }) => (
        <StyledLink to={`${location.pathname}${node.fields.slug}`}>
          <Container>
            <div
              css={`
                margin-bottom: 1rem;
              `}
            >
              <Gift />
            </div>
            {num}
          </Container>
        </StyledLink>
      )}
    </Location>
  );
}

export default UnlockedChapter;
