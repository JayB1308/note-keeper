import { useEffect, useState } from "react";
import {
  NoteContainer,
  NoteForm,
  EditorContainer,
  NoteInput,
  AddNoteButton,
} from "../styles/AddNotes";

import JoditEditor from "jodit-react";
import { useSpring } from "react-spring";
import { useNoteStore } from "../store/NotesStore";
import { useModalStore } from "../store/ModalStore";
import { addDoc } from "@firebase/firestore";

import { toast } from "react-hot-toast";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("");

  const [hover, setHover] = useState<boolean>(false);

  const notesRef = useNoteStore((store) => store.notesRef);
  const setLoading = useNoteStore((store) => store.setLoading);
  const setFetchAgain = useNoteStore((store) => store.setFetchAgain);

  const triggerModal = useModalStore((store) => store.triggerModal);

  const colors = ["#ffb703", "#d62828", "#8338ec", "#f72585", "#09bc8a"];

  useEffect(() => {
    setColor(colors[Math.floor(Math.random())]);
  }, []);

  const createNote = async () => {
    setLoading(true);
    try {
      let note = {
        body: body,
        color: color,
        tagline: tagline,
        title: title,
      };
      const response = await addDoc(notesRef, note);
      if (response) {
        toast.success("Note Added Successfully!");
      }
    } catch (error) {
      toast.error("Something Went Wrong! Try Again!");
    }
    setLoading(false);
    triggerModal();
    setFetchAgain(true);
  };

  const config = {
    width: "100%",
    height: "250px",
    readOnly: false,
    theme: "dark",
    placeholder: "Type Something And Click Outside The Editor To Save!",
  };

  const animateHoverButton = useSpring({
    backgroundColor: hover ? "#252525" : "#ffb703",
    color: !hover ? "#252525" : "#ffb703",
  });

  return (
    <NoteContainer>
      <h4>Add New Note</h4>
      <NoteForm>
        <NoteInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <NoteInput
          type="text"
          placeholder="Tagline"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <EditorContainer>
          <JoditEditor
            value={body}
            onBlur={(newContent) => setBody(newContent)}
            config={config}
          />
        </EditorContainer>
        <AddNoteButton
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            createNote();
          }}
          style={animateHoverButton}
        >
          Add note
        </AddNoteButton>
      </NoteForm>
    </NoteContainer>
  );
};

export default AddNotes;
