import { HeaderStyled } from "./Header.styled";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderStyled>{<img src={logo} alt="rick and morty logo" />}</HeaderStyled>
  );
};

export default Header;
