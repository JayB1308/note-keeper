import { useState } from "react";
import { useNoteStore } from "../store/NotesStore";

import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import parse from "html-react-parser";

import { BackDrop } from "../styles/Modal";
import {
  BackButton,
  BarSection,
  RightBarSection,
  DeleteButton,
  EditButton,
  NoteTitle,
  OpenedNoteContainer,
  OpenNoteBar,
  TagLineContainer,
  TagLine,
  BodyContainer,
  Body,
} from "../styles/OpenedNote";
import { useModalStore } from "../store/ModalStore";

import UpdateNote from "./UpdateNote";
import DeleteModal from "./DeleteModal";

const OpenedNote = () => {
  const note = useNoteStore((store) => store.currentNote);
  const closeOpen = useModalStore((store) => store.closeNote);

  const [edit, setEdit] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  return (
    <BackDrop>
      {edit && <UpdateNote note={note} setEdit={setEdit} />}
      {deleteModal && <DeleteModal id={note.id} setDelete={setDeleteModal} />}
      <OpenedNoteContainer>
        <OpenNoteBar>
          <BarSection>
            <BackButton>
              <IoIosArrowBack size={36} onClick={closeOpen} />
            </BackButton>
            <NoteTitle>{note.title}</NoteTitle>
          </BarSection>
          <RightBarSection>
            <EditButton
              onClick={() => {
                setEdit(true);
              }}
            >
              <MdEdit size={36} />
            </EditButton>
            <DeleteButton
              onClick={(e) => {
                e.preventDefault();
                setDeleteModal(true);
              }}
            >
              <AiFillDelete size={36} />
            </DeleteButton>
          </RightBarSection>
        </OpenNoteBar>
        <TagLineContainer>
          <TagLine>{note.tagline}</TagLine>
        </TagLineContainer>
        <BodyContainer>
          <Body>{parse(note.body)}</Body>
        </BodyContainer>
      </OpenedNoteContainer>
    </BackDrop>
  );
};

export default OpenedNote;
