import React from 'react'
import { BsSpotify } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { AiFillFolderAdd} from "react-icons/ai";
import { Menu } from './SidebarComponent/Menu';
import { listOfmenu } from './SidebarComponent/Menus'
import { Playlist } from './SidebarComponent/Playlist';
import { Link } from 'react-router-dom';




function SideMenu() {
    const navigate = useNavigate();
    const createPlaylist = () => {
        const playlistNumber = Math.floor(Math.random() * 1000000);
        const playlistSlug = `my-playlist-${playlistNumber}`;
        const playlist = {
          slug: playlistSlug,
          title: `My Playlist ${playlistNumber}`,
          tracks: []
        };
        const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
        playlists.push(playlist);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        navigate(`/playlist/${playlistSlug}`);
      };
    
  return (
    <div className='text-gray-100 w-full h-20 md:h-screen bg-black p-6 bg-opacity-95 drop-shadow-lg' style={{}} >
        <div className='flex flex-row  md:flex-col space-y-2'>
            <div className='headersection flex flex-row space-x-4 text-2xl font-bold' >
                <BsSpotify className='mt-1' />
                <h1>Spotify</h1>
               
            </div>
            <div className='flex flex-row-reverse md:flex-col' >
             <div>
                <Menu title={'MENU'} menuobj={listOfmenu} />
            </div>
            <div>
          <button onClick={createPlaylist} className="py-1 px-2 text-gray-400 hover:border-red-400 hover:border-l-4">
            <div className='flex flex-row space-x-2 space-y-3'>
              <i className='mt-4'><AiFillFolderAdd /></i>
              <span>Create Playlist</span>
            </div>
          </button>
        </div>
            <div>
                <Playlist/>
            </div>


        </div>
        </div>
    </div>
  )
}

export {SideMenu}