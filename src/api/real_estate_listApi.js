
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const listingApi = createApi({
    reducerPath: 'listingApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getListing: builder.query({
        query: ({lang,page}) => ({
          url: `/real-estate?page=${page}`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json"
          },
        }),
      }),

      getFeature: builder.query({
        query: (lang) => ({
          url: `/features/real-estate`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json"
          },
        }),
      }),

      getListById: builder.query({
        query: ({lang,id}) => ({
          url: `/real-estate/${id}`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json"
          },
        }),
      }),

    
      


    }),
  })

  export const { useGetListingQuery , useGetListByIdQuery , useGetFeatureQuery } = listingApi

