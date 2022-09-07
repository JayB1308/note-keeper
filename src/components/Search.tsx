import {
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "../styles/Search";
import { ExtraLargeText } from "../styles/Typography";

const Search = () => {
  return (
    <SearchContainer>
      <ExtraLargeText>Search</ExtraLargeText>
      <SearchBar>
        <SearchInput type="text" placeholder="Type Something.." />
        <SearchButton>Search</SearchButton>
      </SearchBar>
    </SearchContainer>
  );
};

export default Search;
