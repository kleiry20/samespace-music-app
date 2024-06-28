import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  // tracks,
  data,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef: any = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = data.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(data[lastTrackIndex]);
    } else {
      setTrackIndex((prev: number) => prev - 1);
      setCurrentTrack(data[trackIndex - 1]);
    }
  };

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>

        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;
