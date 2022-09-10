import styled from "styled-components";
import { animated } from "react-spring";
export const NoteContainer = styled.div`
  display: flex;
  width: 75%;
  height: auto;
  align-items: center;
  flex-direction: column;
  margin-top: -10%;
  & h4 {
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.color.primary};
  }
`;

export const NoteForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: -2%;
`;

export const NoteInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.fontColor};
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.color.mainBackground};
  margin-bottom: 0.35rem;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
`;

export const EditorContainer = styled.div`
  width: 100%;
  max-height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const AddNoteButton = styled(animated.button)`
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 30%;
  background-color: ${(props) => props.theme.color.primary};
  color: white;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin: 1rem auto;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.color.primary};
`;
