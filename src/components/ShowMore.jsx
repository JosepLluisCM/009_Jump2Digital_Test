import styled from "styled-components";

/* Style component here, Styled Components object replaces React Component name*/
const ShowMoreStyled = styled.div`
  margin: 20px;
  border: 1px solid red;
    p {
      display: inline-block;
    }
`;


const ShowMore = (props) => {

  return (
    <ShowMoreStyled>
      {props.onShowClick && <button onClick={props.onShowChars}>Show me more!</button>}
    </ShowMoreStyled>
  );
}

export default ShowMore;