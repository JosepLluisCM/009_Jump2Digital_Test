import styled from "styled-components";

/* Style the component here, Styled Components object replaces React Component name*/
export const CardListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 2rem;
  /* border: 1px solid red; */
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 0.5rem;
  }
`;
