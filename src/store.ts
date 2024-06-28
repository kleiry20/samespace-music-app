// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import songListReducer from "./features/songList/songList";
import playerReducer from "./features/player/player";
import searchReducer from "./features/search/search";

const store = configureStore({
  reducer: {
    // Add your reducers here
    songList: songListReducer,
    player: playerReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
