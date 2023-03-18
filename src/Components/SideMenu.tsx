import React from 'react'
import { BsSpotify } from "react-icons/bs";

import { FaEllipsisH, FaSearch } from "react-icons/fa";
import { Menu } from './SidebarComponent/Menu';
import { listOfmenu } from './SidebarComponent/Menus'
import { Playlist } from './SidebarComponent/Playlist';

function SideMenu() {
  return (
    <div className='text-gray-100 w-full h-screen bg-zinc-800 p-6 bg-opacity-95 drop-shadow-lg' style={{}} >
        <div className='flex flex-col'>
            <div className='headersection flex flex-row justify-between ' >
                <BsSpotify/>
                <h1>SPOTIFY</h1>
                <FaEllipsisH/>
            </div>
            <div className='search relative' >
                <input type='text' placeholder='Search'   className='h-full w-full mt-4 rounded-xl pl-4 py-1 text-gray-800 bg-zinc-600'  ></input>
                   <div className='absolute top-6 right-4 text-gray-400 ' > <FaSearch/></div>  
            </div>
            <div>
                <Menu title={'MENU'} menuobj={listOfmenu} />
            </div>
            <div>
                <Playlist/>
            </div>


        </div>
    </div>
  )
}

export {SideMenu}