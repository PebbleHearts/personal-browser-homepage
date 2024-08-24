import { createApi } from '@reduxjs/toolkit/query/react';
import getBaseQuery from '../../../api/baseQuery';
import { ProjectItem } from '../types';

export const todosApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectItem[], unknown>({
      query: () => `/todos/projects`,
    }),
  }),
})

export const { useGetProjectsQuery } = todosApi;