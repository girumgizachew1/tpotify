import React from 'react'
import{ genres }from '../assets/constants'
import {SongCard} from './MainContainerComponent/SongCard'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { Loader } from './MainContainerComponent/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from './MainContainerComponent/Error';

function Maincontainer() {

  const{data, isFetching , error} = useGetTopChartsQuery({});
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state:any) => state.player);
  
  


  if(isFetching) return <Loader/>

  if(error) return <Error/>

  const genreTitle= 'pop'
  return (
    <div className='h-screen W-full bg-zinc-900 bg-opacity-90 overflow-auto'>
        <div className='headerimage h-40 w-full bg-white' >
          <img className='object-cover w-full h-40 blur opacity-75' src='./header.jpg' style={{filter:'grayscale(100%)'}} />
        </div>
        <div className='w-full px-4 flex justify-between items-center sm:flex-row flex-col mt-4 mb-10' >
            <h2 className='font-bold text-3xl text-white text-left' > Discover {genreTitle} </h2>
            <select
              onChange={()=>{}}
              value=""
              className='bg-black text-gray-100 p-3 text-sm rounded-lg outline-non sm-mt-5'
            >
                {genres.map((genre:any)=>
                  <option key={genre.value} value={genre.value} >
                    {genre.title}
                  </option>
                )}
              
            </select>
        </div>
        <div className='flex flex-wrap sm-justify-start justify-center gap-8 scroll-y' >
        {
        Array.isArray(data.tracks) && data.tracks.map((song: { key: React.Key | null | undefined; },i: any) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          ))
        }
        </div>


    </div>
  )
}

export {Maincontainer}