import create from "zustand";

interface ModalState {
  newNote: boolean;
  search: boolean;
  open: boolean;
  openTrigger: () => void;
  triggerModal: () => void;
  openSearch: () => void;
  openNote: () => void;
  closeNote: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  newNote: false,
  search: false,
  openNote: () => set((state) => ({ newNote: !state.newNote })),
  openSearch: () => set((state) => ({ search: !state.search })),
  triggerModal: () =>
    set((state) => ({
      search: false,
      newNote: false,
    })),
  openTrigger: () => set((state) => ({ open: !state.open })),
  open: false,
  closeNote: () => set((state) => ({ open: false })),
}));
