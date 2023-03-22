import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Mainpage from './Pages/Mainpage'
import { Maincontainer } from './Components/Maincontainer'
import { Rightcontainer } from './Components/Rightcontainer'
import { SideMenu } from './Components/SideMenu'
import { Songs } from './Pages/Songs';
import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './Components/MusicPlayer'
import { useSelector } from 'react-redux'
import { Search } from './Pages/search'
import { Favorite } from './Pages/favortie'
import {PlaylistPage} from './Pages/Playlist'


function App() {
  const { activeSong } = useSelector((state: any) => state.player);

  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 w-full h-screen overflow-hidden">
      <div className='h-screen w-full relative' >
        <div className="h-screen w-full flex flex-col md:flex-row">
          <div className='basis-2/12' ><SideMenu /></div>

          <div className="flex-1 h-fit pb-40 basis-10/12 bg-zinc-900 bg-opacity-95">
            <div className='basis-1/12' > <Rightcontainer /></div>
            <Routes>
              <Route path="/" element={<Mainpage />} />
               <Route path="/songs/:songid/:artistId" element={<Songs />} />
              <Route path="/search/" element={<Search />} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/playlist/:slug" element={<PlaylistPage />} />
            </Routes>
            {activeSong?.title && (
              <div className="absolute h-20 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-zinc-900 to-zinc-800 backdrop-blur-lg z-10">
                <MusicPlayer />
              </div>
            )}
          </div>



        </div>
      </div>

    </div>
  )
}

export default App
