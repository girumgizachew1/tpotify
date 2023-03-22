import React, { useState, useEffect } from 'react';
import { FaEllipsisH, FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../Components/MainContainerComponent/Error';
import { Loader } from '../Components/MainContainerComponent/Loader';
import { SongCard } from '../Components/MainContainerComponent/SongCard';
import { useSearchQuery } from '../redux/services/shazamCore';
import { SearchTrackCard } from '../Components/search/SearchTruckCard';
import { SearchArtistCard } from '../Components/search/SearchArtistCard';

function Search() {
    const [search, setSearch] = useState('');
    const [searchquery, setsearchQuery] = useState('');
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state: any) => state.player);
    const [ maindata , setmaindata] =useState([])
    const { data, isFetching, error } = useSearchQuery(search);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setsearchQuery(search);
        }, 500);
    
        return () => clearTimeout(timeoutId);
    }, [search]);
    
    
    

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(event.target.value);
        // Clear the previous timeout
        setsearchQuery('');
    };

    return (
        <div className='text-white w-full h-screen flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300'>
            <div className='search relative w-full px-20 py-10'>
                <input
                    placeholder='What do you want to listen for ?'
                    className='h-12 w-full rounded-xl pl-4 py-1 text-gray-800 bg-zinc-600'
                    autoComplete='off'
                    id='search'
                    type='search'
                    value={search}
                    onChange={handleInputChange}
                />
                <div className='absolute top-2 right-4 text-gray-400 '>
                    <FaSearch />
                </div>
            </div>
            <div className='flex-grow flex flex-wrap sm-justify-start justify-center gap-8 py-8 scroll-y'>
                <>  {isFetching && <Loader title="Searching the song" />}</>
                <>   {error && <Error />}</>
                <>  {data && (
                    <>  
                        {  
                            Array.isArray(data.tracks.hits) &&
                            data.tracks.hits.map((hit: any, i: any) => (
                                <SearchTrackCard key={hit.track.url} song={hit.track} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
                            ))}
                         {Array.isArray(data.artists.hits) &&
                            data.artists.hits.map((hit: any, i: any) => (
                                <SearchArtistCard key={hit.artist.adamid} i={i} song={hit.artist} isPlaying={isPlaying} activeSong={activeSong} data={data} />
                            ))}
                    </>
                )}</>
            </div>

        </div>
    );
}

export { Search };
