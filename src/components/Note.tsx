import { NoteItem, NoteTagline, NoteTitle } from "../styles/Note";
import { useNoteStore } from "../store/NotesStore";
import { useModalStore } from "../store/ModalStore";
interface NoteProp {
  note: {
    id: any;
    title: string;
    body: string;
    color: string;
    tagline: string;
  };
}

const Note = (props: NoteProp) => {
  const setCurrentNote = useNoteStore((store) => store.setCurrentNote);
  const openTrigger = useModalStore((store) => store.openTrigger);

  return (
    <NoteItem
      color={props.note.color}
      onClick={() => {
        setCurrentNote(props.note);
        openTrigger();
      }}
    >
      <NoteTitle>{props.note.title}</NoteTitle>
      <NoteTagline>{props.note.tagline}</NoteTagline>
    </NoteItem>
  );
};

export default Note;
