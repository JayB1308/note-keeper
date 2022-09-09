import styled from "styled-components";
import { animated } from "react-spring";

export const UpdateContainer = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.5rem;
  background-color: ${(props) => props.theme.color.mainBackground};
  width: 50%;
  z-index: 200;
  top: 3%;
  box-shadow: 0px 5px 15px ${(props) => props.theme.color.primary};

  & h3 {
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.color.primary};
  }
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: -2rem;
`;

export const UpdateInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.color.fontColor};
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.color.mainBackground};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
`;

export const UpdateFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem auto;
`;

export const UpdateButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 30%;
  background-color: #ffb703;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 30%;
  color: #ffb703;
  background-color: ${(props) => props.theme.color.mainBackground};
  border: 2px solid #ffb703;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
