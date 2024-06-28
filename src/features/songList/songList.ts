import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Song } from "../../utils/song";

export interface SongListState {
  data: Song[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SongListState = {
  data: [
    {
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
  ],
  status: "idle",
  error: null,
};

export const fetchSongs: any = createAsyncThunk(
  "songList/fetchSongs",
  async () => {
    const response = await axios.get("https://cms.samespace.com/items/songs");
    return response.data.data;
  }
);

export const songListSlice = createSlice({
  name: "songList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch songs";
      });
  },
});

export default songListSlice.reducer;
