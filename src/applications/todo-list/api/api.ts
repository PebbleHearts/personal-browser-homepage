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
    createTodo: builder.mutation<ProjectItem, { title: string, description: string, projectId: number }>({
      query: ({ title, description, projectId }) => ({
        url: `/todos`,
        method: 'POST',
        body: { title, description, projectId },
      }),
    }),
    getProjectTodos: builder.query<ProjectItem[], { projectId: string }>({
      query: ({ projectId }) => `/todos/project/${projectId}`,
    }),
  }),
})

export const { useGetProjectsQuery, useCreateTodoMutation, useGetProjectTodosQuery } = todosApi;