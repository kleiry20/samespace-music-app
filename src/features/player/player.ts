import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../utils/song";

export interface playerState {
  selectedSong: Song | null;
}

const initialState: playerState = {
  selectedSong: {
    id: 1,
    name: "Colors",
    artist: "William King",
    accent: "#331E00",
    cover: "4f718272-6b0e-42ee-92d0-805b783cb471",
    url: "https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/august-145937.mp3",
    status: undefined,
    top_track: undefined,
    sort: null,
    user_created: undefined,
    date_created: undefined,
    user_updated: undefined,
    date_updated: undefined,
    duration: undefined,
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    selectSong: (state, action: PayloadAction<Song>) => {
      state.selectedSong = action.payload;
    },
    clearSelection: (state) => {
      state.selectedSong = null;
    },
  },
});

export const { selectSong, clearSelection } = playerSlice.actions;
export default playerSlice.reducer;
