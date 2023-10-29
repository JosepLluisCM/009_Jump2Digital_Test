import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 80%;
  /* border: 1px solid red; */
  margin: 0 0 2rem 0;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border: none;
  border-radius: 30px;
  background: #0e4c59;
  color: white;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.4);
  font-size: 25px;
  outline: none;
  ::-webkit-input-placeholder {
    color: red;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      type="search"
      placeholder="Search Characters Here"
      value={props.value}
      onChange={(event) => props.onChangeInput(event.target.value)}
    />
  );
};

export default SearchBar;
