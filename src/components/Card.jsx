import styled from "styled-components";


const CardStyled = styled.div`
  border: 2px solid blue;
  /* width: 200px;
  height: 200px; */

  img {
    height: 100px;
    width: 100px;
  }
`;

const Card = (props) => {
  /* console.log(props.name); */
  


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