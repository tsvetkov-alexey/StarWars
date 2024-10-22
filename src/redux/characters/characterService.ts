import { CharactersResponse } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, number>({
      query: (page = 1) => ({
        url: `people/?page=${page}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = characterApi;
