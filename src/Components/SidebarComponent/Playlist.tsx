import React from 'react'
import { Link } from 'react-router-dom';



function Playlist() {
  const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
  return (
    <div className='mt-4 h-64 '>
      <h2 className='text-lg font-bold mb-4'>Playlists</h2>
      <div className='h-56  overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 ' >
      <ul className='mt-2 space-y-3'>
        {playlists.map((playlist:any) => (
          <li key={playlist.slug}>
            <Link to={`/playlist/${playlist.slug}`} className='text-gray-400 text-sm hover:text-white'>
              {playlist.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
export {Playlist }