import styled from "styled-components";

/* Style the App component here, Styled Components object replaces React Component name*/
export const AppStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem 0 5rem;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 450px) {
    padding: 0 2rem 0 2rem;
  }
`;
export const PortalStyled = styled.img`
  position: fixed;
  scale: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -25%);
  z-index: -1;
  filter: blur(4px);
  @media (max-width: 450px) {
    scale: 100%;
    transform: translate(-50%, -50%);
  }
`;

export const WrapperStyled = styled.div`
  background-color: #525252;
  font-size: 25px;
  color: #e3e3e3;
  border-radius: 50px;
  padding: 1.5rem 2.5rem;
  margin: 5rem;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.4);
`;
