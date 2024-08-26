import { createApi } from '@reduxjs/toolkit/query/react';
import getBaseQuery from '../../../api/baseQuery';
import { ProjectItem } from '../types';

export const todosApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: getBaseQuery(),
  tagTypes: ['ProjectTodos'],
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectItem[], unknown>({
      query: () => `/todos/projects`,
    }),
    createTodo: builder.mutation<ProjectItem, { title: string, description: string, projectId: number }>({
      query: ({ title, description, projectId }) => ({
        url: `/todos`,
        method: 'POST',
        body: { title, description, projectId },
      }),
      invalidatesTags: ['ProjectTodos'],
    }),
    getProjectTodos: builder.query<ProjectItem[], { projectId: number }>({
      query: ({ projectId }) => `/todos/project/${projectId}`,
      providesTags: ['ProjectTodos']
    }),
  }),
})

export const { useGetProjectsQuery, useCreateTodoMutation, useGetProjectTodosQuery } = todosApi;