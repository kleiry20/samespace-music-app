import React, { RefObject } from "react";
import "./Progress.css";
import "../../styles/custom-progress-bar.css";

interface ProgressBarProps {
  progressBarRef: RefObject<HTMLInputElement>;
  audioRef: RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  // timeProgress,
  duration,
}) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  // const formatTime = (time: number) => {
  //   if (time && !isNaN(time)) {
  //     const minutes = Math.floor(time / 60);
  //     const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //     const seconds = Math.floor(time % 60);
  //     const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //     return `${formatMinutes}:${formatSeconds}`;
  //   }
  //   return "00:00";
  // };

  // useEffect(() => {
  //   const percentage = (timeProgress / duration) * 100;
  //   if (progressBarRef.current) {
  //     progressBarRef.current.style.background = `linear-gradient(to right, #f50 ${Math.round(
  //       percentage
  //     )}%, #c1b6bc ${Math.round(percentage)}%)`;
  //   }
  // }, [timeProgress, duration, progressBarRef]);

  return (
    <div className="progress">
      {/* <span className="time current">{formatTime(timeProgress)}</span> */}
      <input
        className="progress-input"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        max={duration}
        onChange={handleProgressChange}
      />
      {/* <span className="time">{formatTime(duration)}</span> */}
    </div>
  );
};

export default ProgressBar;
