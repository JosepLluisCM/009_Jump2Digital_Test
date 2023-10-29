import styled from "styled-components";
import Card from "./Card";

/* Style the component here, Styled Components object replaces React Component name*/
const CardListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 2rem;
  /* border: 1px solid red; */
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 0.5rem;
  }
`;

/* Character List passed as prop, conditionally rendered and key prop added for React, matches id from the object fetched from the api multiplicated by the page number, to make uniquew ids for all characters */
const CardList = (props) => {
  return (
    <CardListStyled>
      {props.list.map((char) => (
        <Card {...char} key={char.id} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
