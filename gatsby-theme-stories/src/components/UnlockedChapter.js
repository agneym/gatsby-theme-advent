import React, { useState } from "react";
import { Gift } from "react-feather";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { useSpring, animated } from "react-spring";

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
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Location>
      {({ location }) => (
        <StyledLink to={`${location.pathname}${node.fields.slug}`}>
          <Container>
            <div>
              <div>
                <Gift
                  css={`
                    margin-bottom: 1rem;
                  `}
                />
              </div>
              {num}
            </div>
          </Container>
        </StyledLink>
      )}
    </Location>
  );
}

export default UnlockedChapter;
