import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectSong } from "../../features/player/player";
import ProgressBar from "./ProgressBar/ProgressBar";
import { generateSlightlyLighterColor } from "../../utils/generateGradient";

//  icons
import {
  IoEllipsisHorizontal,
  IoVolumeMediumSharp,
  IoVolumeMute,
} from "react-icons/io5";

import { FaPlay } from "react-icons/fa6";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";

const AudioPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector(
    (state: RootState) => state.player.selectedSong
  );
  const songs = useSelector((state: RootState) => state.songList.data);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const [_currentTime, setCurrentTime] = useState<number>(0); // @ts-ignore
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
      if (progressBarRef.current) {
        progressBarRef.current.value = String(audio?.currentTime || 0);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
        if (progressBarRef.current) {
          progressBarRef.current.max = String(audio.duration);
        }
      }
    };

    audio?.addEventListener("timeupdate", handleTimeUpdate);
    audio?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio?.removeEventListener("timeupdate", handleTimeUpdate);
      audio?.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [selectedSong]);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const nextSong = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === selectedSong?.id
    );
    const nextIndex = (currentIndex + 1) % songs.length;
    dispatch(selectSong(songs[nextIndex]));
  };

  const previousSong = () => {
    const currentIndex = songs.findIndex(
      (song) => song.id === selectedSong?.id
    );
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    dispatch(selectSong(songs[previousIndex]));
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="control-bar">
      {selectedSong && (
        <>
          <audio
            autoPlay
            ref={audioRef}
            src={selectedSong.url}
            preload="metadata"
          />

          <ProgressBar
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            duration={duration}
          />

          <div className="control-group">
            <button
              className="circle"
              style={{
                background: generateSlightlyLighterColor(
                  `${selectedSong?.accent}`
                ),
              }}
            >
              <IoEllipsisHorizontal />
            </button>

            <div className="control-btns">
              <button className="back-btn" onClick={previousSong}>
                <IoPlayBack />
              </button>
              <div className="play-div">
                <button
                  className="play-btn circle"
                  onClick={isPlaying ? pause : play}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              <button className="next-btn" onClick={nextSong}>
                <IoPlayForward />
              </button>
            </div>
            <button
              onClick={toggleMute}
              className="circle"
              style={{
                background: generateSlightlyLighterColor(
                  `${selectedSong?.accent}`
                ),
              }}
            >
              {isMuted ? <IoVolumeMute /> : <IoVolumeMediumSharp />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
