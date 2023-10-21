import styled from "styled-components";

const CardStyled = styled.div`
  border: 2px solid blue;
  width: 200px;
  height: 200px;
`;

const Card = () => {
  return (
    <CardStyled>
      Card
    </CardStyled>
  );
}

export default Card;