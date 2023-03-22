import React from 'react';

import SongBar from './SongBar';

interface Props {
    data: {
        key: string;
        title: string;
        artistName: string;
        artistId: string;
        artwork: string;
        duration: number;
    }[];
    artistId: string;
    isPlaying: boolean;
    activeSong: string;
    handlePauseClick: () => void;
    handlePlayClick: (songKey: string, songTitle: string, artistName: string, artistId: string, artwork: string, duration: number) => void;
}
const RelatedSongs: React.FC<Props> = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

        <div className="mt-6 w-full flex flex-col">
            {Array.isArray(data) && data.map((song, i) => (
                <SongBar
                    key={`${artistId}-${song.key}-${i}`}
                    song={song}
                    i={i}
                    artistId={artistId}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />
            ))}

        </div>
    </div>
);

export { RelatedSongs };
