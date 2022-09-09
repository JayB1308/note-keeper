import { NoteItem, NoteTagline, NoteTitle, PinContainer } from "../styles/Note";
import { useNoteStore } from "../store/NotesStore";
import { useModalStore } from "../store/ModalStore";
import { BsPinFill, BsPin } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSpring } from "react-spring";
import { db } from "../services/firebase-config";
import { doc, updateDoc } from "@firebase/firestore";

interface NoteProp {
  note: {
    id: any;
    title: string;
    body: string;
    color: string;
    tagline: string;
    pin: boolean;
  };
}

const Note = (props: NoteProp) => {
  const [pin, setPin] = useState<boolean>(props.note.pin);

  const [hover, setHover] = useState<boolean>(false);

  const setCurrentNote = useNoteStore((store) => store.setCurrentNote);
  const openTrigger = useModalStore((store) => store.openTrigger);
  const close = useModalStore((store) => store.closeNote);

  const setLoading = useNoteStore((store) => store.setLoading);
  const setFetchAgain = useNoteStore((store) => store.setFetchAgain);

  const updateNote = async () => {
    setLoading(true);
    try {
      const currentNote = doc(db, "task", props.note.id);
      const newFields = { pin: !pin };
      await updateDoc(currentNote, newFields);
      toast.success("Note Updated Successfully!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
    setLoading(false);
    setFetchAgain(true);
    close();
  };

  const handlePin = () => {
    setPin(!pin);
    updateNote();
  };

  const animateNote = useSpring({
    marginTop: hover ? "-1rem" : "0rem",
  });

  return (
    <NoteItem
      style={animateNote}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      color={props.note.color}
      onClick={() => {
        setCurrentNote(props.note);
        openTrigger();
      }}
    >
      <PinContainer>
        {pin ? (
          <BsPinFill size={20} color="#ff006e" onClick={handlePin} />
        ) : (
          <BsPin size={20} onClick={handlePin} />
        )}
      </PinContainer>
      <NoteTitle>{props.note.title}</NoteTitle>
      <NoteTagline>{props.note.tagline}</NoteTagline>
    </NoteItem>
  );
};

export default Note;
