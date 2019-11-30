import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  box-shadow: ${props => props.theme.listing.common.shadow};
  border-radius: ${props => props.theme.listing.common.radius};
  box-sizing: border-box;
  font-size: ${props => props.theme.listing.common.fontSize};

  ${props =>
    props.side === "back" &&
    `
    padding: ${props.theme.listing.unlocked.backPadding};
    font-size: 1.8rem;
    text-align: justify;
    color: ${props.theme.listing.unlocked.backColor};
  `}
`;

export default Card;
