import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import PlayPause from '../MainContainerComponent/Play';

interface Song {
  name: string;
  avater: string;
  key: string;
  subtitle: string;
  artists?: Array<{
    adamid: string;
  }>;
}

interface Props {
  song: Song;
  i: number;
}

function SearchArtistCard({song, i , isPlaying, activeSong, data }) {
  const dispatch = useDispatch();

  const handlePauseClick = () =>{
    dispatch(playPause(false));

  }
  const handlePlayClick = () =>{
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    
  }
  return (
    <div className="flex flex-col w-56 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-48 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
              isPlaying={isPlaying}
              activeSong={activeSong}
          />         
        </div>

      <img alt="avater_img" src={song.avatar} className="w-full h-full rounded-lg" />

      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
             {song.subtitle}
         </p>
        
      </div>
    </div>
  )
}

export {SearchArtistCard}