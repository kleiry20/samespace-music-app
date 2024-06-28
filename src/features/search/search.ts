import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../utils/song";

export interface SearchState {
  searchResults: Song[];
}

const initialState: SearchState = {
  searchResults: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchResult: (state, action: PayloadAction<Song>) => {
      state.searchResults.push(action.payload);
    },
    clearSearchResult: (state) => {
      state.searchResults = [];
    },
  },
});

export const { addSearchResult, clearSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
