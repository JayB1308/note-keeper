import styled from "styled-components";
import { animated } from "react-spring";

export const DeleteModalContainer = styled(animated.div)`
  width: 50%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.mainBackground};
  box-shadow: 0px 2px 7px ${(props) => props.theme.color.primary};

  & h3 {
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.color.primary};
    margin-top: -1rem;
  }
`;

export const DeleteModalFooter = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.fontColor};
  font-size: ${(props) => props.theme.fontSize.small};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.color.primary};
  outline: none;
  cursor: pointer;
`;

export const CancelButton = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.mainBackground};
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.small};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.color.primary};
  outline: none;
  cursor: pointer;
`;
