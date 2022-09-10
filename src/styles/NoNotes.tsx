import styled from "styled-components";

export const NoNotesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  color: ${(props) => props.theme.color.primary};
  font-family: "Pacifico", cursive;
`;
