import styled from "styled-components";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const NavLogoContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  margin-left: 3rem;
`;

export const NavText = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  color: #ffb703;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-evenly;
  margin-right: 1rem;
`;

export const AddNotesButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 300;
  width: 55%;
  border-radius: 0.25rem;
  padding: 1rem;
  border-radius: 0.45rem;
  cursor: pointer;
  background-color: #3a86ff;
  color: white;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 0.45rem;
  border: none;
  cursor: pointer;
  background-color: #3b3b3b;
  color: white;
`;

export const AddIcon = styled(AiOutlineFileAdd)`
  font-size: 2.5rem;
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 2.5rem;
`;
