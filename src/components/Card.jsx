import { CardStyled } from "./Card.styled";

/* In this component all info fetched about the Character is passed through props, and used to render the info in each Card */
const Card = (props) => {
  return (
    <CardStyled status={props.status}>
      <img src={props.image} alt="avatar" />
      <h1>{props.name}</h1>
      <p>
        <b>Status:</b> {props.status}
      </p>
      <p>
        <b>Species:</b> {props.species}
      </p>
      <p>
        <b>Origin:</b> {props.origin.name}
      </p>
      <p>
        <b>Location:</b> {props.location.name}
      </p>
    </CardStyled>
  );
};

export default Card;
