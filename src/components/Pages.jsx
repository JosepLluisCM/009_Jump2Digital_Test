import styled from "styled-components";
/* import { useState } from 'react'; */

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
      
      <button onClick={props.onPrev}>Previous page</button>
      <p>{props.currentPage}</p>
      <button onClick={props.onNext}>Next Page</button>
      
    </PagesStyled>
  );
}

export default Pages;