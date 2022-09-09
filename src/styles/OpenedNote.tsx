import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { animated } from "react-spring";

export const OpenedNoteContainer = styled(animated.div)`
  display: flex;
  width: 75%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainBackground};
`;

export const OpenNoteBar = styled.div`
  width: 90%;
  padding: 2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarSection = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  gap: ${(props) => props.theme.fontSize.medium};
`;

export const RightBarSection = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  border: 2px solid ${(props) => props.theme.color.fontColor};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  background-color: ${(props) => props.theme.color.mainBackground};
  color: ${(props) => props.theme.color.fontColor};
  cursor: pointer;
`;

export const NoteTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  width: 60%;
  font-weight: 300;
  color: ${(props) => props.theme.color.primary};
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainBackground};
  padding: 0.5rem;
  gap: 0.75rem;
  border: 2px solid ${(props) => props.theme.color.primary};
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color.mainBackground};
  border: 2px solid ${(props) => props.theme.color.primary};
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
`;

export const EditIcon = styled(MdEdit)`
  font-size: ${(props) => props.theme.fontSize.large};
  color: #4361ee;
`;

export const DeletIcon = styled(AiFillDelete)`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const TagLineContainer = styled.div`
  display: flex;
  margin-top: -7%;
  align-items: center;
  width: 100%;
`;

export const TagLine = styled.p`
  margin-left: 10%;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.fontColor};
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: -2%;
`;

export const Body = styled.p`
  width: 90%;
  margin-left: 10%;
  color: ${(props) => props.theme.color.fontColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
