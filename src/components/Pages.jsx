import styled from "styled-components";

/* Style component here, Styled Components object replaces React Component name*/
const PagesStyled = styled.div`
  margin: 20px;
  border: 1px solid red;
    p {
      display: inline-block;
    }
`;


const Pages = (props) => {

  return (
    <PagesStyled>
      <button onClick={props.onShowChars}>Show me more!</button>
    </PagesStyled>
  );
}

export default Pages;