import styled from "styled-components";


const CardStyled = styled.div`
  border: 2px solid blue;
  width: 200px;
  height: 200px;

  img {
    height: 100px;
    width: 100px;
  }
`;

const Card = (props) => {
  /* console.log(props.name); */
  


  return (
    <CardStyled key={props.id}>
      <p>{props.name}</p>
      <img src={props.image} alt="avatar"/>
    </CardStyled>
  );
}

export default Card;