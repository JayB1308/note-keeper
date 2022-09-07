import styled from "styled-components";

export const NoteItem = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 0.95rem;
  height: 250px;
  margin: 1rem;
  padding: 0.5rem 2rem;
  background-color: ${({ color }) => {
    return color;
  }};
  color: white;
`;

export const NoteTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  width: 90%;
`;

export const NoteTagline = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  width: 95%;
  margin-top: -1rem;
`;
