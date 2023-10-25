import styled from "styled-components";
import Card from "./Card";

const CardListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  grid-gap: 50px;

 

  border: 1px solid red;
`;





const CardList = (props) => {
  return (
    <CardListStyled >
      {props.list.map((char) => <Card {...char} key={char.id}/>)}
    </CardListStyled>
  );
}

export default CardList;