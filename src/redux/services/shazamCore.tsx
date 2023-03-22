import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e9f5fdabb1msh78c22a63d7d675fp12154djsn2c76ec8083d7');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/track' }),
    search: builder.query({
      query: (search) => `search?term=${search}&locale=en-US&offset=0&limit=5`
    }),
    listRecommendation: builder.query({
      query: () => `songs/list-recommendations?key=484129036&locale=en-US`
    }),
    songDetail: builder.query({
      query: (songid) => `songs/get-details?key=${songid}&locale=en-US`
    }),
    songRelated: builder.query({
      query: (songid) => `songs/get-related-artist?id=${songid}&l=en-US`
    }),
    artistDetail: builder.query({
      query: (artistId) => `artists/get-details?id=${artistId}&l=en-US`
    }),
  }),
});
export const {
  useGetTopChartsQuery,
  useSearchQuery,
  useArtistDetailQuery,
  useSongDetailQuery,
  useSongRelatedQuery,
  useListRecommendationQuery
} = shazamCoreApi;