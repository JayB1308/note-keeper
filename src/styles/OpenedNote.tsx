import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

export const OpenedNoteContainer = styled.div`
  display: flex;
  width: 75%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  background-color: white;
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
  width: 30%;
  align-items: center;
  gap: 1rem;
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
  width: 15%;
  border: none;
  border-radius: 0.5rem;
  font-size: 3rem;
`;

export const NoteTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #4361ee;
  padding: 0.5rem;
  gap: 0.75rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background-color: #d00000;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
`;

export const EditIcon = styled(MdEdit)`
  font-size: 3rem;
`;

export const DeletIcon = styled(AiFillDelete)`
  font-size: 3rem;
`;

export const TagLineContainer = styled.div`
  display: flex;
  margin-top: -7%;
  align-items: center;
  width: 100%;
`;

export const TagLine = styled.p`
  margin-left: 10%;
  font-size: 1.75rem;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: -2%;
`;

export const Body = styled.p`
  width: 90%;
  margin-left: 10%;
`;
