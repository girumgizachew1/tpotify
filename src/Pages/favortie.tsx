import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import {PlaylistSong} from '../Components/Playlist/PlaylistSong';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchQuery } from '../redux/services/shazamCore';

function Favorite() {
  const [favorite, setFavorite] = useState([]);
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);


  useEffect(() => {
    const savedSongs = localStorage.getItem('savedSongs');
    if (savedSongs) {
      setFavorite(JSON.parse(savedSongs));
    }
  }, []);

  return (
    <div className='h-screen w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 pb-40'>
      <div className='flex flex-row bg-gradient-to-b from-green-600 to-green-00 bg-opacity-50 '>
        <div className='w-56 h-56 bg-gradient-to-r  from-green-600 to-green-600  mx-10 my-5 flex justify-center items-center ' >
          <FaHeart className='w-20 h-20 text-white  ' />
        </div>
        <div className='flex flex-col justify-center space-y-3 ' >
          <h1 className='text-sm text-white' >Playlist</h1>
          <h1 className='text-7xl text-white font-bold ' >Liked Songs</h1>
          <h1 className='text-sm text-white' >Girum Gizachew 1song</h1>
        </div>
      </div>
      <div className='flex flex-col mx-10 ' >
       
        <div className='flex flex-row justify-between text-gray-300 mt-2 text-sm' >
          <div><span className='' >Title</span></div>
          <div><span className='' >Album</span></div>
          <div><span className='' >date Released</span></div>
          <div><span className='' >duration</span></div>

        </div>
        <hr className='w-full border-zinc-500 my-3' />
       
        <div>
          {favorite.length > 0 ? (
            favorite.map((song: any, i: any) => (
              <PlaylistSong key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={null} i={i} />
            ))
          ) : (
            <p className='text-white'>No favorite songs saved</p>
          )}
        </div>
      </div>
    </div>
  );
}


export { Favorite }