const baseUrl = 'https://randomuser.me/api/';

const getUsers = async () => {
  const res = await fetch(baseUrl + '/?results=10');
  let data = await res.json();

  if (data && data.results) return data.results;
  return false;
};

export default getUsers;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const usersApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Get'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
});
