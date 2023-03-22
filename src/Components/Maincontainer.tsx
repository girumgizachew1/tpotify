import React from 'react'
import{ genres }from '../assets/constants'
import {SongCard} from './MainContainerComponent/SongCard'
import { useGetTopChartsQuery, useListRecommendationQuery } from '../redux/services/shazamCore'
import { Loader } from './MainContainerComponent/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from './MainContainerComponent/Error';

function Maincontainer() {

  const {data: topChartsData, isFetching: topChartsFetching, error: topChartsError} = useGetTopChartsQuery({});
  
  const {data: recommendationData, isFetching: recommendationFetching, error: recommendationError} = useListRecommendationQuery({});
  
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state:any) => state.player);
  
  if(topChartsFetching) return <Loader title="Searching Top 20" />

  if(topChartsError) return <Error/>

  if(topChartsFetching) return <Loader title="Searching Recommendation"/>

  if(topChartsError) return <Error/>
  
  return (
    <div className='h-screen W-full bg-zinc-900 bg-opacity-90 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300'>
        
        <div className='w-full px-4 flex justify-between items-center sm:flex-row flex-col mt-4 mb-10' >
            <h2 className='font-bold text-2xl text-white text-left' > Discover Top 20 </h2>
        </div>
        <div className='flex flex-wrap sm-justify-start justify-center gap-4 scroll-y' >
        {
        Array.isArray(topChartsData.tracks) && topChartsData.tracks.map((song: { key: React.Key | null | undefined; },i: any) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={topChartsData}
            />
          ))
        }
        </div>






        <div className='w-full px-4 flex justify-between items-center sm:flex-row flex-col mt-4 mb-10' >
            <h2 className='font-bold text-2xl text-white text-left' > Recommandation </h2>
          
        </div>
        <div className='flex flex-wrap sm-justify-start justify-center gap-4 scroll-y' >
        {recommendationData && (
          <>
          {
        Array.isArray(recommendationData.tracks) && recommendationData.tracks.map((song: { key: React.Key | null | undefined; },i: any) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={recommendationData}
              />
           )) }
            
          
          </>)
        }
        </div>


    </div>
  )
}

export {Maincontainer}