import { DeleteModalContainer, DeleteModalFooter } from "../styles/DeleteModal";
import { BackDrop } from "../styles/Modal";
import { DeleteButton } from "../styles/OpenedNote";
import { CancelButton } from "../styles/UpdateNote";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-hot-toast";

import { useNoteStore } from "../store/NotesStore";
import { useModalStore } from "../store/ModalStore";

import { doc, deleteDoc } from "@firebase/firestore";
import { db } from "../services/firebase-config";

interface DeleteModalProps {
  id: any;
  setDelete: Dispatch<SetStateAction<any>>;
}

const DeleteModal = ({ id, setDelete }: DeleteModalProps) => {
  const setLoading = useNoteStore((store) => store.setLoading);
  const setFetchAgain = useNoteStore((store) => store.setFetchAgain);

  const closeOpen = useModalStore((store) => store.closeNote);

  const deleteNote = async () => {
    setLoading(true);
    try {
      const noteDoc = doc(db, "task", id);
      await deleteDoc(noteDoc);
      toast.success("Note Deleted Successfully!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }

    setLoading(false);
    setFetchAgain(true);
  };
  return (
    <BackDrop>
      <DeleteModalContainer>
        <h3>Are You Sure?</h3>
        <DeleteModalFooter>
          <DeleteButton
            onClick={(e) => {
              e.preventDefault();
              setDelete(false);
              deleteNote();
              closeOpen();
            }}
          >
            Yes Delete
          </DeleteButton>
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              setDelete(false);
            }}
          >
            Cancel
          </CancelButton>
        </DeleteModalFooter>
      </DeleteModalContainer>
    </BackDrop>
  );
};

export default DeleteModal;
