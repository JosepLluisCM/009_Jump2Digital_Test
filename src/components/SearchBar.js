import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 200px;
`;

const SearchBar = () => {
  return (
    <SearchBarStyled type="search" />
  );
}

export default SearchBar;