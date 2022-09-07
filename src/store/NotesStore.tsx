import create from "zustand";

interface NoteState {
  notesRef: any;
  setNotesRef: (ref: any) => void;
  currentNote: any;
  setCurrentNote: (note: any) => void;
  loading: boolean;
  setLoading: (loadingState: boolean) => void;
  fetchAgain: boolean;
  setFetchAgain: (fetch: boolean) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  notesRef: {},
  setNotesRef: (ref) =>
    set(() => ({
      notesRef: ref,
    })),
  currentNote: {},
  setCurrentNote: (note) =>
    set(() => ({
      currentNote: note,
    })),
  loading: false,
  setLoading: (loadingState) => {
    set(() => ({
      loading: loadingState,
    }));
  },
  fetchAgain: false,
  setFetchAgain: (fetch: boolean) =>
    set(() => ({
      fetchAgain: fetch,
    })),
}));
