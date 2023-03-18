import React, { useRef } from 'react';

type PlayerProps = {
  activeSong: {
    url: string | undefined;
    hub?: {
      actions: {
        uri: string;
      }[];
    }};
  volume: number;
  isPlaying: boolean;
  seekTime: number;
  repeat: boolean;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
};
 

const Player = ({ activeSong, volume, isPlaying, seekTime, repeat, currentIndex, onEnded, onTimeUpdate, onLoadedData }: PlayerProps) => {
  const url= activeSong.hub.actions[1].uri;
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seekTime;
    }
  };

  const handleLoadedData = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.currentTime = seekTime;
    }
  };

  return (
    <audio
      ref={audioRef}
      src={activeSong.url}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      onCanPlay={handleLoadedData}
      onSeeked={handleTimeUpdate}
      loop={repeat}
      autoPlay={isPlaying}
    />
  );
};

export default Player;
