import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { animated } from "react-spring";

export const BackDrop = styled(animated.div)`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
`;

export const ModalContainer = styled(animated.div)`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.25rem;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 10px ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.mainBackground};
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1%;
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: ${(props) => props.theme.color.primary};
`;
