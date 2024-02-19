import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, base_url } from "./key";

// Define a service using a base URL and expected endpoints
export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({


    comment: builder.mutation({
      query: ({token,payload}) => ({
        url: "/real-estate/comment",
        method: "POST",
        body: payload,
        headers: {
          "Api-Key": api_key,
          authorization: `Bearer ${token}`,
        },
      }),
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCommentMutation } = commentApi;
