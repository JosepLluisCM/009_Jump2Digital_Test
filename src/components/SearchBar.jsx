import { SearchBarStyled } from "./SearchBar.styled";

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
