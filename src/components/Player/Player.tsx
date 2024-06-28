import { useEffect, useState } from "react";
import "./Player.css";
import { getCoverImg } from "../../utils/getCoverImg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Player = () => {
  const [img, setImg] = useState("");
  const selectedSong = useSelector(
    (state: RootState) => state.player.selectedSong
  );

  async function fetchImg() {
    if (selectedSong) {
      const imgUrl = await getCoverImg(selectedSong.cover);
      setImg(imgUrl);
    }
  }

  useEffect(() => {
    fetchImg();
  }, [selectedSong]);

  return (
    <>
      {selectedSong && (
        <div className="player">
          <div className="player-data">
            <h2>{selectedSong.name}</h2>
            <p>{selectedSong.artist}</p>
          </div>

          <div className="player-cover-div">
            <img className="player-cover" src={img} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;

// : (
//   <div className="player">
//     <div className="player-data">
//       <h2>{"abc"}</h2>
//       <p>{"abc"}</p>
//     </div>

//     <div className="player-cover">cover-img</div>
//     <div className="player-controls">controls</div>
//   </div>
// )
