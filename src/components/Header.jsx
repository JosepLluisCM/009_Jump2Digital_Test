import styled from "styled-components";
import logo from "../assets/logo.png";


/* Style the component here, Styled Components object replaces React Component name*/
const HeaderStyled = styled.header`
  border: 1px solid red;
  img {
    height: 150px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      {<img src={logo} alt="rick and morty logo"/>}
    </HeaderStyled>
  );
}

export default Header;