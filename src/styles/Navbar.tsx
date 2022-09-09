import styled from "styled-components";

import { AiOutlineFileAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { animated } from "react-spring";

export const NavContainer = styled(animated.nav)`
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
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  color: ${(props) => props.theme.color.primary};
  margin-left: 15%;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-evenly;
  margin-right: 1rem;
`;

export const AddNotesButton = styled(animated.button)`
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  width: 75%;
  font-size: ${(props) => props.theme.fontSize.medium};
  border-radius: 0.25rem;
  padding: 1rem;
  border-radius: 0.45rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.fontColor};
`;

export const AddIcon = styled(AiOutlineFileAdd)`
  font-size: 2.5rem;
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 2.5rem;
`;
