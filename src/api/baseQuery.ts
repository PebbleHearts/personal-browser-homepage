import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pcm1hbG1pY2hlbHBAZ21haWwuY29tIiwidXNlcklkIjoyLCJpYXQiOjE3MjQ2NjM5NDQsImV4cCI6MTcyNDc1MDM0NH0.x6HRXQpXL4Vr9-UgBnEJJqOZNQq7icXfHIQACRECw-w`);
      return headers;
    },
  });
};

export default getBaseQuery;