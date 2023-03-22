import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useSongDetailQuery, useSongRelatedQuery, useArtistDetailQuery } from '../redux/services/shazamCore';
import { Loader } from '../Components/MainContainerComponent/Loader';
import { Error } from '../Components/MainContainerComponent/Error';
import {RelatedSongs}  from '../Components/Song/RelatedSong';
import { DetailedHeader } from '../Components/Song/DetailedHeader';

const Songs : React.FC = () => {
  const dispatch = useDispatch();
  const { songid, artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state: any) => state.player);
 
  const { data, isFetching: isFetchinRelatedSongs, error } = useSongRelatedQuery( songid );
  const { data: songData, isFetching: isFetchingSongDetails } = useSongDetailQuery( songid );
  const { data: artistData, isFetching: isFetchingArtistDetails } = useArtistDetailQuery(artistId);

  if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (songKey: string, songTitle: string, artistName: string, artistId: string, artwork: string, duration: number) => {
    dispatch(setActiveSong({ songKey,songTitle ,artistName , artistId, data, artwork ,duration }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 ">
      {artistId && <DetailedHeader artistId={artistId} songData={songData} artistData={artistData?.data[0]}

      
 />}

      <div className="mb-10 mx-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5 w-full">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line: string, i: number) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>
      {artistId &&
      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
      }
    </div>
  );
};

export {Songs}