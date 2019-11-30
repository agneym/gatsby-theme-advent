import React, { useState } from "react";
import { Gift } from "react-feather";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { useSpring, animated } from "react-spring";

import Card from "./Card";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.listing.unlocked.frontColor};
`;

function UnlockedChapter({ node, num }) {
  const [flipped, setFlipped] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 600, friction: 100 },
  });
  const AnimatedContent = animated(Card);
  return (
    <Location>
      {({ location }) => (
        <StyledLink to={`${location.pathname}${node.fields.slug}`}>
          <Container
            onMouseOver={() => setFlipped(false)}
            onMouseOut={() => setFlipped(true)}
          >
            <AnimatedContent
              style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateX(180deg)`),
              }}
            >
              <Gift
                css={`
                  margin-bottom: 1rem;
                `}
              />
              {num}
            </AnimatedContent>
            <AnimatedContent
              style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
              side="back"
            >
              <p>{node.frontmatter.title}</p>
            </AnimatedContent>
          </Container>
        </StyledLink>
      )}
    </Location>
  );
}

export default UnlockedChapter;
