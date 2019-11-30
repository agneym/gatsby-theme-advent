import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

const coverImageQuery = graphql`
  query getCoverImage {
    fluidImages: file(relativePath: { regex: "/cover.jpg/" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#910116", shadow: "#ffffff", opacity: 14 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Header = styled.header`
  height: ${props => props.theme.cover.height};
  overflow: hidden;
  position: relative;
`;

const Heading = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: ${props => props.theme.cover.fontSize};
  margin: 0;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

function Cover() {
  const data = useStaticQuery(coverImageQuery);
  const imageData = data.fluidImages.childImageSharp.fluid;

  return (
    <Header>
      <Heading>
        #DevAdvent
        <br />
        2019
      </Heading>
      <Image fluid={imageData} objectFit="cover" alt="" />
    </Header>
  );
}

export default Cover;
