import { create } from "zustand";

type TLayoutStore = {
    playlistTabWidth: number;
    mainTabWidth: number;
    playingTabWidth: number;

    setPlaylistTabWidth: (width: number) => void;
    setMainTabWidth: (width: number) => void;
    setPlayingTabWidth: (width: number) => void;
}

export const useLayoutStore = create<TLayoutStore>()((set) => ({
    playlistTabWidth: 72,
    mainTabWidth: 0,
    playingTabWidth: 0,

    setPlaylistTabWidth: (width) => set({ playlistTabWidth: width }),
    setMainTabWidth: (width) => set({ mainTabWidth: width }),
    setPlayingTabWidth: (width) => set({ playingTabWidth: width }),
}));
