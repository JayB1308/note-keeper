import { useState, useEffect } from "react";
import "./App.css";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import { AppContainer } from "./styles/App";
import { useModalStore } from "./store/ModalStore";
import { useNoteStore } from "./store/NotesStore";
import Modal from "./components/Modal";
import AddNotes from "./components/AddNotes";
import Search from "./components/Search";
import Notes from "./components/Notes";
import Loader from "./components/Loader";

import { db } from "./services/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import OpenedNote from "./components/OpenedNote";

function App() {
  const newNote = useModalStore((store) => store.newNote);
  const search = useModalStore((store) => store.search);
  const open = useModalStore((store) => store.open);

  const setNotesRef = useNoteStore((store) => store.setNotesRef);
  const loading = useNoteStore((store) => store.loading);
  const setLoading = useNoteStore((store) => store.setLoading);
  const fetchAgain = useNoteStore((store) => store.fetchAgain);
  const setFetchAgain = useNoteStore((store) => store.setFetchAgain);

  const [notes, setNotes] = useState<any>([]);

  const notesCollectionRef = collection(db, "task");
  setNotesRef(notesCollectionRef);
  const GET_ALL_NOTES = async () => {
    setLoading(true);
    const data = await getDocs(notesCollectionRef);
    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
    setFetchAgain(false);
  };

  useEffect(() => {
    GET_ALL_NOTES();
  }, [fetchAgain]);

  return (
    <AppContainer>
      <Toaster />
      {loading && <Loader />}
      {newNote && <Modal children={<AddNotes />} />}
      {search && <Modal children={<Search />} />}
      {open && <OpenedNote />}
      <Navbar />
      <Notes notes={notes} />
    </AppContainer>
  );
}

export default App;
