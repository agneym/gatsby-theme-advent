import styled from "styled-components";

const Card = styled.article`
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
  font-size: 4rem;

  ${props =>
    props.side === "back" &&
    `
    padding: 4rem;
    font-size: 1.8rem;
    text-align: justify;
    color: ${props.theme.listing.unlocked.backColor};
  `}
`;

export default Card;
