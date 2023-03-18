import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Mainpage from './Pages/Mainpage'
import { Maincontainer } from './Components/Maincontainer'
import { Rightcontainer } from './Components/Rightcontainer'
import { SideMenu } from './Components/SideMenu'
import Artist from './Pages/Artist'
import { Songs } from './Pages/Songs'
import { Route, Routes } from 'react-router-dom';
import  MusicPlayer from './Components/MusicPlayer'
import { useSelector } from 'react-redux'


function App() {
  const { activeSong } = useSelector((state:any) => state.player);

  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 w-full h-screen overflow-hidden">
      <div className='h-screen w-full relative' >
        <div className="h-screen w-full flex flex-row" style={{ backgroundImage: `url(./bg.png)`, backgroundSize: 'cover', zIndex: '-1' }}>
          <div className='basis-2/12' ><SideMenu /></div>

          <div className="flex-1 h-fit pb-40 basis-9/12">
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/artists/:id" element={<Artist />} />
              <Route path="/songs/:songid" element={<Songs />} />
            </Routes>
            {activeSong?.title && (
              <div className="absolute h-20 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/5 to-[#808080] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer  />
              </div>
           )}
          </div>


          <div className='basis-1/12' > <Rightcontainer /></div>
        </div>
      </div>

    </div>
  )
}

export default App
