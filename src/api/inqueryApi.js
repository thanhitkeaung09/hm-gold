import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, base_url } from "./key";

// Define a service using a base URL and expected endpoints
export const inqueryApi = createApi({
  reducerPath: "inqueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["inquery"],
  endpoints: (builder) => ({

    getInquery: builder.query({
      query: ({lang,token}) => ({
        url: `/real-estate/inquires`,
        headers: {
          "Api-Key": api_key,
          "Accept-Language": lang,
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    inQuery: builder.mutation({
      query: ({token,payload}) => ({
        url: "/real-estate/inquires",
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
export const { useGetInqueryQuery , useInQueryMutation } = inqueryApi;
