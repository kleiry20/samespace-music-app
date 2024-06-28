import React, { RefObject } from "react";
import "./Progress.css";
import "../../../styles/custom-progress-bar.css";

interface ProgressBarProps {
  progressBarRef: RefObject<HTMLInputElement>;
  audioRef: RefObject<HTMLAudioElement>;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  duration,
}) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  return (
    <div className="progress">
      <input
        className="progress-input"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        max={duration}
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default ProgressBar;
