import styled from "styled-components";
import Card from "./Card";

const CardListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const CardList = () => {
  return (
    <CardListStyled>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListStyled>
  );
}

export default CardList;