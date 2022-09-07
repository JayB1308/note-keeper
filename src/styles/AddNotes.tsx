import styled from "styled-components";

export const NoteContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  flex-direction: column;
  margin-top: -4rem;
`;

export const NoteForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const NoteInput = styled.input`
  border: none;
  outline: none;
  width: 98%;
  padding: 1rem 0.75rem;
  font-size: 1.5rem;
  margin: 0.75rem 0rem;
  border-bottom: 1px solid black;
`;

export const EditorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const AddNoteButton = styled.button`
  width: 50%;
  margin: 0 auto;
  border: none;
  padding: 0.25rem 2rem;
  font-size: 1.5rem;
`;
