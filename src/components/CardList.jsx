import { CardListStyled } from "./CardList.styled";

import Card from "./Card";

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
