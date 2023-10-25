import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderStyled = styled.header`
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