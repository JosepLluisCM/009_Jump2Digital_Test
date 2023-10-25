import styled from "styled-components";

/* Style the component here, Styled Components object replaces React Component name*/
const CardStyled = styled.div`
  border: 1px solid green;
  width: 200px;
  height: 300px;
  text-align: center;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 20px;
  }
`;

/* In this component all info fetched about the Character is passed through props, and used to render the info in each Card */
const Card = (props) => { 

  return (
    <CardStyled key={props.id}>
      <img src={props.image} alt="avatar"/>
      <h1>{props.name}</h1>
      <p><b>Status:</b> {props.status}</p>
      <p><b>Species:</b> {props.species}</p>
      <p><b>Origin:</b> {props.origin.name}</p>
      <p><b>Location:</b> {props.location.name}</p>

    </CardStyled>
  );
}

export default Card;