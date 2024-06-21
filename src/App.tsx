import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import SongList from "./components/SongList/SongList";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://cms.samespace.com/items/songs")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetc", data);
        setData(data);
      });
  }, []);
  // console.log(data);

  return (
    <>
      {data && (
        <div className="music-app gradient">
          <Header />
          <SongList data={data} />
          <Player />
        </div>
      )}
    </>
  );
}

export default App;
