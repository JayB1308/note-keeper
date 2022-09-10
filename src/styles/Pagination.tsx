import styled from "styled-components";
import { animated } from "react-spring";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2%;
`;

export const PaginationMenu = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PageChangeButtons = styled(animated.button)`
  border-radius: 50%;
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.mainBackground};
  border: 2px solid ${(props) => props.theme.color.primary};
`;

export const PageNumbers = styled(animated.div)`
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.mainBackground};
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 1rem;
`;

export const ActivePageNumbers = styled(animated.div)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  width: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.mainBackground};
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 1rem;
`;
