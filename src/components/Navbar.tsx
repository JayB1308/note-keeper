import {
  AddNotesButton,
  NavButtons,
  NavContainer,
  NavLogoContainer,
  NavText,
  AddIcon,
} from "../styles/Navbar";

import { useModalStore } from "../store/ModalStore";

const Navbar = () => {
  const openNote = useModalStore((store) => store.openNote);

  return (
    <NavContainer>
      <NavLogoContainer>
        <NavText>Notes</NavText>
      </NavLogoContainer>
      <NavButtons>
        <AddNotesButton onClick={openNote}>
          <AddIcon />
          Add New Note
        </AddNotesButton>
      </NavButtons>
    </NavContainer>
  );
};

export default Navbar;
