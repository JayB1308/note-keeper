import React, { Dispatch, SetStateAction, useState } from "react";
import { ExtraLargeText } from "../styles/Typography";
import { toast } from "react-hot-toast";
import {
  CancelButton,
  UpdateButton,
  UpdateContainer,
  UpdateForm,
  UpdateFormFooter,
  UpdateInput,
} from "../styles/UpdateNote";
import JoditEditor from "jodit-react";
import { db } from "../services/firebase-config";
import { doc, updateDoc } from "@firebase/firestore";
import { useNoteStore } from "../store/NotesStore";
import { useModalStore } from "../store/ModalStore";

interface UpdateProps {
  note: any;
  setEdit: Dispatch<SetStateAction<any>>;
}

const UpdateNote = ({ note, setEdit }: UpdateProps) => {
  const [title, setTitle] = useState<string>(note.title);
  const [tagline, setTagline] = useState<string>(note.tagline);
  const [body, setBody] = useState<string>(note.body);

  const setLoading = useNoteStore((store) => store.setLoading);
  const setFetchAgain = useNoteStore((store) => store.setFetchAgain);

  const close = useModalStore((store) => store.closeNote);

  const config = {
    width: "100%",
    height: "350px",
    readOnly: false,
    theme: "dark",
  };

  const updateNote = async () => {
    setLoading(true);
    try {
      const currentNote = doc(db, "task", note.id);
      const newFields = { title: title, tagline: tagline, body: body };
      await updateDoc(currentNote, newFields);
      toast.success("Note Updated Successfully!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }

    setLoading(false);
    setEdit(false);
    setFetchAgain(true);
    close();
  };

  return (
    <UpdateContainer>
      <ExtraLargeText>Update Note</ExtraLargeText>
      <UpdateForm>
        <UpdateInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <UpdateInput
          type="text"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <JoditEditor
          value={body}
          onBlur={(newContent) => setBody(newContent)}
          config={config}
        />
        <UpdateFormFooter>
          <UpdateButton
            onClick={(e) => {
              e.preventDefault();
              updateNote();
              setEdit(false);
            }}
          >
            Edit
          </UpdateButton>
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              setEdit(false);
            }}
          >
            Cancel
          </CancelButton>
        </UpdateFormFooter>
      </UpdateForm>
    </UpdateContainer>
  );
};

export default UpdateNote;
