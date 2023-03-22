import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../Components/MainContainerComponent/Error';
import { Loader } from '../Components/MainContainerComponent/Loader';
import { SongCard } from '../Components/MainContainerComponent/SongCard';
import { useSearchQuery } from '../redux/services/shazamCore';
import { SearchTrackCard } from '../Components/search/SearchTruckCard';
import { SearchArtistCard } from '../Components/search/SearchArtistCard';
import { useParams } from 'react-router-dom';
import { FaHome, FaHeart, FaWaveSquare, FaMicrophoneAlt, FaMusic, FaSearch } from "react-icons/fa";
import { PlaylistTrackSearch } from '../Components/Playlist/PlaylistTrackSearch';
import { Track } from '../Components/MusicPlayer/Track';
import { PlaylistSong } from '../Components/Playlist/PlaylistSong';

function PlaylistPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState('');
  const [searchquery, setsearchQuery] = useState('');
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);
  const [maindata, setmaindata] = useState([])
  const { data, isFetching, error } = useSearchQuery(search);

  

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
    // Clear the previous timeout
    setsearchQuery('');
  };

  

  const [playlist, setPlaylist] = useState<Track[]>([]); // Define playlist state

  // Define function to handle adding the song to the playlist
  const handleAddToPlaylist = (song: Track, slug: string) => {
    setSearch('')
    // Retrieve the playlist from the local storage
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist') || '{}');

    // Get the playlist for the current slug, or create an empty array if it doesn't exist
    const playlistForSlug = storedPlaylist[slug] || [];

    // Check if the song is already in the playlist for the current slug
    const songInPlaylist = playlistForSlug.find((playlistSong: Track) => playlistSong.url === song.url);

    if (!songInPlaylist) {
      // If the song is not already in the playlist, add it
      const updatedPlaylist = [...playlistForSlug, song];

      // Update the playlist in the local storage
      storedPlaylist[slug] = updatedPlaylist;
      localStorage.setItem('playlist', JSON.stringify(storedPlaylist));

    } else {
      // If the song is already in the playlist, display an error message
      alert('Song is already in the playlist');
    }
  };
  useEffect(() => {
    // Retrieve the playlist data from the local storage
    const storedPlaylistData = JSON.parse(localStorage.getItem('playlist') || '{}');
    setPlaylist(storedPlaylistData);
  }, []);

  console.log(playlist[slug])

  return (
    <div className='h-screen w-full flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300'>

      <div className='flex flex-row bg-gradient-to-b  from-blue-600 to-zinc-00 bg-opacity-50 '>
        <div className='w-56 h-56 bg-gradient-to-r  from-blue-600 to-blue-600  mx-10 my-5 flex justify-center items-center ' >
          <FaMusic className='w-20 h-20 text-white  ' />
        </div>
        <div className='flex flex-col justify-center space-y-3 ' >
          <h1 className='text-sm text-white' >Playlist</h1>
          <h1 className='text-7xl text-white font-bold'>{slug.replace(/-/g, ' ')}</h1>
          <h1 className='text-sm text-white' >Girum Gizachew</h1>
        </div>
      </div>
      <div className='mx-20' >
        <div className='flex flex-row justify-between text-gray-300 mt-2 text-sm' >
          <div><span className='' >Title</span></div>
          <div><span className='' >Album</span></div>
          <div><span className='' >date Released</span></div>
          <div><span className='' >duration</span></div>

        </div>
        <hr className='w-full border-zinc-500 my-3' />
        <div>
          <>  {playlist[slug] && (
            <>
              {playlist[slug].map((song: any, i: any) => (
                <PlaylistSong key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
              ))}
            </>
          )}
          </>
        </div>
      </div>

      <div className='flex flex-col w-ful' >
        <div className='mt-10 mx-10 space-y-3' >
          <hr className='w-full border-zinc-500 my-3' />
          <h1 className='text-white text-xl font-bold' >Lets Find Something for you playlist</h1>

          <div className='search relative w-full px-20 py-2'>
            <input
              placeholder='Search for musics'
              className='h-12 w-full rounded-xl pl-4 py-1 text-gray-800 bg-zinc-600'
              autoComplete='off'
              id='search'
              type='search'
              value={search}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex flex-wrap sm-justify-start justify-center gap-1 py-1 mb-56 '>
          <>  {isFetching && <Loader title="Searching song details" />}</>
          <>   {error && <Error />}</>
          <>  {data && (
            <>
              {
                Array.isArray(data.tracks.hits) &&
                data.tracks.hits.map((hit: any, i: any) => (
                  <PlaylistTrackSearch handleAddToPlaylist={handleAddToPlaylist} key={hit.track.url} song={hit.track} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} slug={slug} />
                ))}
            </>
          )}
          </>
        </div>

      </div>
    </div>
  );
}
export { PlaylistPage }