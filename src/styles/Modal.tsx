import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const BackDrop = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 10px gray;
  background-color: #252525;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 2rem;
`;
