import "./Player.css";

const Player = () => {
  return (
    <div className="player">
      <div className="player-data">
        <h2>Song Title</h2>
        <p>Singer</p>
      </div>

      <div className="player-cover">cover-img</div>
      <div className="player-controls">controls</div>
    </div>
  );
};

export default Player;
