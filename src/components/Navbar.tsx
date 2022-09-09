import {
  AddNotesButton,
  NavButtons,
  NavContainer,
  NavLogoContainer,
  NavText,
  AddIcon,
} from "../styles/Navbar";
import { useState } from "react";
import { useModalStore } from "../store/ModalStore";
import { useSpring } from "react-spring";
const Navbar = () => {
  const openNote = useModalStore((store) => store.openNote);

  const [hover, setHover] = useState<boolean>(false);

  const animatedContainer = useSpring({
    from: {
      marginTop: "-10rem",
      opacity: 0,
    },
    to: {
      marginTop: "0rem",
      opacity: 1,
    },
  });

  const animatedButton = useSpring({
    width: hover ? "75%" : "15%",
    fontSize: hover ? "1.5rem" : "0rem",
    justifyContent: hover ? "space-between" : "center",
  });

  return (
    <NavContainer style={animatedContainer}>
      <NavLogoContainer>
        <NavText>Notes</NavText>
      </NavLogoContainer>
      <NavButtons>
        <AddNotesButton
          style={animatedButton}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
          onClick={openNote}
        >
          <AddIcon />
          {hover ? "Add New Note" : ""}
        </AddNotesButton>
      </NavButtons>
    </NavContainer>
  );
};

export default Navbar;
