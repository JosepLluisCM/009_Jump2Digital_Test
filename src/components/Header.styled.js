import styled from "styled-components";

/* Style the component here, Styled Components object replaces React Component name*/
export const HeaderStyled = styled.header`
  margin: 2rem;
  width: 100%;
  img {
    display: block;
    margin: 1rem auto 1rem auto;
    height: 150px;
    @media (max-width: 650px) {
      height: 100px;
      margin: 0 auto 0 auto;
    }
  }
`;
