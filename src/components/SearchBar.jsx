import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 200px;
  border: 1px solid red;
`;

const SearchBar = () => {
  return (
    <SearchBarStyled type="search" />
  );
}

export default SearchBar;