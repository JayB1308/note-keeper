import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 1rem 0.75rem;
  height: 3rem;
  font-size: 1.5rem;
  margin: 0.75rem 0rem;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const SearchButton = styled.button`
  width: 20%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.75rem;
`;
