
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const ratingApi = createApi({
    reducerPath: 'ratingApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getRating: builder.query({
        query: ({lang,id,token}) => ({
          url: `/real-estate/${id}/rating/detail`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Authorization": `Bearer ${token}`
          },
        }),
      }),

      rating: builder.mutation({
        query: ({token,payload}) => ({
          url: "/real-estate/rating",
          method: "POST",
          body: payload,
          headers: {
            "Api-Key": api_key,
            authorization: `Bearer ${token}`,
          },
        }),
      }),


    }),
  })

  export const { useGetRatingQuery , useRatingMutation } = ratingApi

