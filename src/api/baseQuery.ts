import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pcm1hbG1pY2hlbHBAZ21haWwuY29tIiwidXNlcklkIjoyLCJpYXQiOjE3MjIyNjMxMDksImV4cCI6MTcyMjM0OTUwOX0.0nEK82YL33ij2GYgBfvKOna-z-YOf5ClvHq-xiA3fFw`);
      return headers;
    },
  });
};

export default getBaseQuery;