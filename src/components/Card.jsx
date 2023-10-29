import styled from "styled-components";
/* import { ReactComponent as Skull } from "../assets/skull-crossbones-solid.svg";
import { ReactComponent as Interrogation } from "../assets/interrogation-soid.svg";
 */
/* Style the component here, Styled Components object replaces React Component name*/
const CardStyled = styled.div`
  background-color: #0e4c59;
  border-radius: 1rem;
  width: 200px;
  height: 325px;
  text-align: center;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  font-size: 14px;
  border: 3px solid #0e4c59;
  &:hover {
    border: 3px solid #7bf346;
    animation: border 0.2s linear;
  }
  @keyframes border {
    from {
      border-color: #0e4c59;
    }
    to {
      border-color: #7bf346;
    }
  }
  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 0.5rem;
    border-width: 5px;
    border-style: solid;
    border-color: ${function (props) {
      if (props.status === "Alive") return "#7bf346";
      if (props.status === "Dead") return "red";
      else return "gray";
    }};
    /* border: 5px solid #23a2bd; */
  }
  h1 {
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  @media (max-width: 650px) {
    width: 125px;
    height: 230px;
    font-size: 11px;
    padding: 0.5rem;
    img {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      margin-top: 0.25rem;
      border-width: 2px;
    }
    h1 {
      margin: 0.5rem 0;
    }
    p {
      margin: 0.25rem 0;
    }
  }
`;

/* In this component all info fetched about the Character is passed through props, and used to render the info in each Card */
const Card = (props) => {
  return (
    <CardStyled status={props.status}>
      <img src={props.image} alt="avatar" />
      {/* {props.status === "Dead" && <Skull />}
      {props.status === "unknown" && <Interrogation />} */}
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
