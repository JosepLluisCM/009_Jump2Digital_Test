import styled from "styled-components";
import { ReactComponent as Skull } from "../assets/skull-crossbones-solid.svg";
import { ReactComponent as Interrogation } from "../assets/interrogation-soid.svg";

/* Style the component here, Styled Components object replaces React Component name*/
const CardStyled = styled.div`
  background-color: #9ad6a4;
  border-radius: 1rem;
  width: 200px;
  height: 270px;
  text-align: center;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 20px;

    border-width: 5px;
    border-style: solid;
    border-color: ${function(props) {
      if (props.status === "Alive") return "lime";
      if (props.status === "Dead") return "red";
      else return "gray";
    } };
    /* border: 5px solid #23a2bd; */
  }
`;

/* In this component all info fetched about the Character is passed through props, and used to render the info in each Card */
const Card = (props) => { 

  return (
    <CardStyled status={props.status}>
      <img src={props.image} alt="avatar"/>
      {props.status==="Dead" && <Skull />}
      {props.status==="unknown" && <Interrogation />}
      <h1>{props.name}</h1>
      <p><b>Status:</b> {props.status}</p>
      <p><b>Species:</b> {props.species}</p>
      <p><b>Origin:</b> {props.origin.name}</p>
      <p><b>Location:</b> {props.location.name}</p>

    </CardStyled>
  );
}

export default Card;