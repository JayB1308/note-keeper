import { NotesContainer, NotesGrid } from "../styles/Notes";
import Note from "./Note";

interface NotesProps {
  notes: [];
}

const Notes = ({ notes }: NotesProps) => {
  return (
    <NotesContainer>
      <NotesGrid>
        {notes.map((note: any) => {
          return <Note key={note.id} note={note} />;
        })}
      </NotesGrid>
    </NotesContainer>
  );
};

export default Notes;
