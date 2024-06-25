import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import SongList from "./components/SongList/SongList";

import { fetchData, getInput } from "./utils/fetchData.js";

function App() {
  const [data, setData] = useState();

  const [isSelected, setIsSongSelected] = useState(false);
  const [activeSong, setActiveSong] = useState({
    name: "song name",
    artist: "artist",
    url: "",
    cover: "",
  });

  useEffect(() => {
    fetch("https://cms.samespace.com/items/songs")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetc", data);
        setData(data);
      });
  }, []);

  // console.log(data);
  fetchData();

  return (
    <>
      {data && (
        <div className="music-app gradient">
          <Header />
          <SongList
            data={data}
            activeSong={activeSong}
            setActiveSong={setActiveSong}
          />
          <Player
            // data={data}
            activeSong={activeSong}

            // setActiveSong={setActiveSong}
          />
        </div>
      )}

      {/* <h3>Hi</h3>
      <input type="text" id="input" placeholder="enter here" />
      <button onClick={() => getInput()}>submit</button> */}
    </>
  );
}

export default App;
