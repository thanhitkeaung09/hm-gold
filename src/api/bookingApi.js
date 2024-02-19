
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      booking: builder.mutation({
        query: ({token,payload}) => ({
          url: "/real-estate/booking",
          method: "POST",
          body: payload,
          headers: {
            "Api-Key": api_key,
            authorization: `Bearer ${token}`,
          },
        }),
        invalidatesTags: ["auth"],
      }),

      getBooking: builder.query({
        query: ({lang,token}) => ({
          url: `/real-estate/booking`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json",
            "Authorization": "Bearer " + token
          },
        }),
      }),
      


    }),
  })

  export const { useBookingMutation  ,useGetBookingQuery } = bookingApi

