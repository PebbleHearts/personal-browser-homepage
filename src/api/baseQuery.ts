import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pcm1hbG1pY2hlbHBAZ21haWwuY29tIiwidXNlcklkIjoyLCJpYXQiOjE3MjQ1MDcyOTgsImV4cCI6MTcyNDU5MzY5OH0.trUb6krI6pv3g-H6Te_YoA2Y26qoFOSrllaAUtFRqJc`);
      return headers;
    },
  });
};

export default getBaseQuery;