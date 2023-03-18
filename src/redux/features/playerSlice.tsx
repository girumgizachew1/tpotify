import { createSlice } from '@reduxjs/toolkit';

type Song = {
  track: string;
  // add any other properties here
}

type PlayerState = {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song | {};
  genreListId: string;
}

type SetActiveSongPayload = {
  song: Song;
  data?: {
    tracks?: Song[];
    properties?: any;
    hits?: any[];
  }
  i: number;
}

type NextSongPayload = number;
type PrevSongPayload = number;
type PlayPausePayload = boolean;
type SelectGenreListIdPayload = string;

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: { payload: SetActiveSongPayload }) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action: { payload: NextSongPayload }) => {
      const song = state.currentSongs[action.payload];
      if (song?.track) {
        state.activeSong = song;
      } else {
        state.activeSong = {};
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action: { payload: PrevSongPayload }) => {
      const song = state.currentSongs[action.payload];
      if (song?.track) {
        state.activeSong = song;
      } else {
        state.activeSong = {};
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: { payload: PlayPausePayload }) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action: { payload: SelectGenreListIdPayload }) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
