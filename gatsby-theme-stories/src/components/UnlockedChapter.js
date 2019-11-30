import React, { useState } from "react";
import { Gift } from "react-feather";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Content = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.07) 0px 1px 2px 0px;
  border-radius: 6px;
  box-sizing: border-box;

  ${props =>
    props.side === "back" &&
    `
    padding: 4rem;
    font-size: 1.8rem;
    text-align: justify;
    color: ${props.theme.listing.unlocked.backColor};
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.listing.unlocked.frontColor};
  font-size: 4rem;
`;

function UnlockedChapter({ node, num }) {
  const [flipped, setFlipped] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 600, friction: 100 },
  });
  const AnimatedContent = animated(Content);
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
