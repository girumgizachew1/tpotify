import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

interface Props {
isPlaying: boolean;
activeSong: {
title: string;
} | null;
song: {
title: string;
};
handlePause: () => void;
handlePlay: () => void;
}

const PlayPause: React.FC<Props> = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
isPlaying && activeSong?.title === song.title ? (
<FaPauseCircle
   size={20}
   className="text-gray-300"
   onClick={handlePause}
 />
) : (
<FaPlayCircle
   size={20}
   className="text-gray-300"
   onClick={handlePlay}
 />
)
);

export default PlayPause;