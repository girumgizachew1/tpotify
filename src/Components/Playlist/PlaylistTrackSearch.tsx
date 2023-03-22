import React from 'react';

interface Track {
  images?: {
        coverart: string;
      };
  url: string;
  subtitle: string;
  title: string;
  artists?: Array<{
    adamid: string;

}>;
}

interface PlaylistTrackSearchProps {
  song: Track;
  isPlaying: boolean;
  activeSong: string;
  data: any;
  i: number;
  slug: string;
  handleAddToPlaylist: (song: Track, slug:string) => void; // Add this prop for the function to handle adding the song to playlist
}

function PlaylistTrackSearch({ song, isPlaying, activeSong, data, slug ,i, handleAddToPlaylist }: PlaylistTrackSearchProps) {
    
  return (
    <div className='flex flex-row w-full h-16 rounded-2xl justify-between text-white mx-5 px-10 items-center'>
      <div className='flex flex-row space-x-2 items-center'>
        <img src={song.images?.coverart} alt={song.title} className='w-12 h-12' />
        <div>
          <div className='text-sm text-gray-200 font-bold'>{song.title}</div>
          <div className='text-sm text-gray-400'>{song.subtitle}</div>
        </div>
      </div>
      <div className='flex flex-col item-center'>{song.url}</div>
      <button
        className='px-3 border border-white rounded-xl text-sm py-1'
        onClick={() => {
            handleAddToPlaylist(song, slug);
             // Call the function to handle adding the song to the playlist
        }}
      >
        Add
      </button>
    </div>
  );
}

export { PlaylistTrackSearch };
