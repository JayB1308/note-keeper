import styled from "styled-components";
import { animated } from "react-spring";

export const NoteItem = styled(animated.div)<{ color: string }>`
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
  color: ${(props) => props.theme.color.fontColor};
  cursor: pointer;
`;

export const PinContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const NoteTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: 400;
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: -2%;
  text-overflow: ellipsis;
`;

export const NoteTagline = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  width: 95%;
  margin-top: -1rem;
`;
