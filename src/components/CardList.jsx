import styled from "styled-components";
import Card from "./Card";

/* Style the component here, Styled Components object replaces React Component name*/
const CardListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  grid-gap: 1rem;
  border: 1px solid red;
`;

/* Character List passed as prop, conditionally rendered and key prop added for React, matches id from the object fetched from the api multiplicated by the page number, to make uniquew ids for all characters */
const CardList = (props) => {
  return (
    <CardListStyled >
      {props.list.map((char) => <Card {...char} key={char.id * props.currentPage}/>)}
    </CardListStyled>
  );
}

export default CardList;