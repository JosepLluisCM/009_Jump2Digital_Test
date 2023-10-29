import styled from "styled-components";
import logo from "../assets/logo.png";

/* Style the component here, Styled Components object replaces React Component name*/
const HeaderStyled = styled.header`
  /* border: 1px solid red; */
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

const Header = () => {
  return (
    <HeaderStyled>{<img src={logo} alt="rick and morty logo" />}</HeaderStyled>
  );
};

export default Header;
