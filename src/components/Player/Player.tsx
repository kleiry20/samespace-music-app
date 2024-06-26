import { useEffect, useState } from "react";
import "./Player.css";
import { getCoverImg } from "../../utils/getCoverImg";

interface PlayerProps {
  // name: String;
  // artist: String;
  // url?: String;
  activeSong: {
    name: String;
    artist: String;
    url?: String;
    cover: String;
  };
}

const Player: React.FC<PlayerProps> = ({ activeSong }: any) => {
  console.log("fein fein", activeSong);
  const [img, setImg] = useState("");
  const [songUrl, setSongUrl] = useState("");

  async function fetchImg() {
    if (activeSong) {
      const imgUrl = await getCoverImg(activeSong.cover);
      setImg(imgUrl);
    }
  }

  function fetchSong() {
    if (activeSong) {
      setSongUrl(activeSong.url);
      console.log("song url before:", songUrl);
    }
    console.log("song url", songUrl);
  }

  // useEffect(() => {
  //   fetchImg();
  //   fetchSong();
  // }, [activeSong, songUrl]);

  return (
    <>
      {activeSong ? (
        <div className="player">
          <div className="player-data">
            <h2>{activeSong.name}</h2>
            <p>{activeSong.artist}</p>
          </div>

          <div className="player-cover">
            <img className="player-cover" src={img} alt="" />
          </div>
          <div className="player-controls">
            songname = {activeSong.name} <br />
            {/* <audio controls>
              <source src={songUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
            <audio controls>
              <source src={activeSong.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ) : (
        <div className="player">
          <div className="player-data">
            <h2>{"abc"}</h2>
            <p>{"abc"}</p>
          </div>

          <div className="player-cover">cover-img</div>
          <div className="player-controls">
            controls
            {/* <audio controls>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
