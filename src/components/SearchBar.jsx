import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 200px;
  border: 1px solid red;
`;

const SearchBar = (props) => {
  return (
    <SearchBarStyled type="search" value={props.value} onChange={(event) => props.onChangeInput(event.target.value)}/>
  );
}

export default SearchBar;