import { useState, useEffect } from "react";
import "./App.css";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import { AppContainer } from "./styles/App";
import { useModalStore } from "./store/ModalStore";
import { useNoteStore } from "./store/NotesStore";
import Modal from "./components/Modal";
import AddNotes from "./components/AddNotes";
import Search from "./components/Search";
import Notes from "./components/Notes";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = notes.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(notes.length / recordsPerPage);

  const notesCollectionRef = collection(db, "task");
  setNotesRef(notesCollectionRef);
  const GET_ALL_NOTES = async () => {
    setLoading(true);
    const data = await getDocs(notesCollectionRef);
    let pinned: any = [],
      unpinned: any = [];
    data.docs.forEach((doc) => {
      const note = { ...doc.data(), id: doc.id };
      if (doc.data().pin) {
        pinned.push(note);
      } else {
        unpinned.push(note);
      }
    });
    setNotes([...pinned, ...unpinned]);
    setLoading(false);
    setFetchAgain(false);
  };

  useEffect(() => {
    GET_ALL_NOTES();
  }, [fetchAgain]);

  const theme = {
    color: {
      mainBackground: "#252525",
      primary: "#ffb703",
      secondary: "#3a86ff",
      fontColor: "#fff",
    },
    fontSize: {
      xxLarge: "3.5rem",
      xLarge: "3rem",
      large: "2.5rem",
      medium: "1.5rem",
      small: "0.75rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Toaster />
        {loading && <Loader />}
        {newNote && <Modal children={<AddNotes />} />}
        {search && <Modal children={<Search />} />}
        {open && <OpenedNote />}
        <Navbar />
        <Notes notes={currentRecords} />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
