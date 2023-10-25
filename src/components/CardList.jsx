import styled from "styled-components";
import Card from "./Card";

const CardListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;





const CardList = (props) => {
  return (
    <CardListStyled >
      {props.list.map((char) => <Card {...char} key={char.id}/>)}
    </CardListStyled>
  );
}

export default CardList;