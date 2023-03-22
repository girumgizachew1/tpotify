import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import PlayPause from '../MainContainerComponent/Play';
interface Song {
  title: string;
  images?: {
    coverart: string;
  };
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

function PlaylistSong({song, i , isPlaying, activeSong, data }) {
  const dispatch = useDispatch();

  const handlePauseClick = () =>{
    dispatch(playPause(false));

  }
  const handlePlayClick = () =>{
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    
  }
  console.log(activeSong)
  
  console.log(song.key)
  return (
    <div className="flex flex-row w-full my-1 h-14  animate-slideup rounded-lg cursor-pointer items-center">
      
      <div className="relative w-12 h-12 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
              isPlaying={isPlaying}
              activeSong={activeSong}
          />         
        </div>

      <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />

      </div>
      <div className="mt-4 flex flex-col ml-4 -mt-1  ">
        <p className="font-semibold text-sm text-gray-200 truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-xs truncate text-gray-400 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export {PlaylistSong}