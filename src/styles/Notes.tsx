import styled from "styled-components";

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -1.5rem;
  width: 100%;
`;

export const NotesGrid = styled.div`
  display: grid;
  width: 90%;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
`;
