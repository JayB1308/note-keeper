import {
  BackDrop,
  CloseIcon,
  ModalContainer,
  ModalHeader,
} from "../styles/Modal";

import { useModalStore } from "../store/ModalStore";
import { useSpring } from "react-spring";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const triggerModal = useModalStore((store) => store.triggerModal);

  const animateBackdrop = useSpring({
    from: {
      marginTop: "-10rem",
      opacity: 0,
    },
    to: {
      marginTop: "0rem",
      opacity: 1,
    },
  });

  const animateContainer = useSpring({
    from: {
      marginTop: "-5rem",
      opacity: 0,
    },
    to: {
      marginTop: "0rem",
      opacity: 1,
    },
  });

  return (
    <BackDrop style={animateBackdrop}>
      <ModalContainer style={animateContainer}>
        <ModalHeader>
          <CloseIcon onClick={triggerModal} size={30} />
        </ModalHeader>
        {props.children}
      </ModalContainer>
    </BackDrop>
  );
};

export default Modal;
