import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { fetchSongs } from "./features/songList/songList.js";
import { generateGradient } from "./utils/generateGradient.js";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import SongList from "./components/SongList/SongList";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer.js";
import { selectSong } from "./features/player/player.js";

function App() {
  const dispatch = useDispatch();

  const songList: any = useSelector((state: RootState) => state.songList.data);
  const selectedSong = useSelector(
    (state: RootState) => state.player.selectedSong
  );

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  useEffect(() => {
    if (songList.length > 0 && !selectedSong) {
      dispatch(selectSong(songList[0]));
    }
  }, [songList, selectedSong, dispatch]);

  return (
    <>
      {songList && (
        <div
          className="music-app"
          style={{ background: generateGradient(`${selectedSong?.accent}`) }}
        >
          <Header />

          <SongList data={songList} />

          {selectedSong && (
            <div className="music-player">
              <Player />
              <AudioPlayer />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
