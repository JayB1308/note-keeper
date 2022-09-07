import {
  BackDrop,
  CloseIcon,
  ModalContainer,
  ModalHeader,
} from "../styles/Modal";

import { useModalStore } from "../store/ModalStore";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const triggerModal = useModalStore((store) => store.triggerModal);

  return (
    <BackDrop>
      <ModalContainer>
        <ModalHeader>
          <CloseIcon onClick={triggerModal} />
        </ModalHeader>
        {props.children}
      </ModalContainer>
    </BackDrop>
  );
};

export default Modal;
