import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apis = createApi({
    reducerPath: 'apis',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ['comment'],
    endpoints: (builder) => ({})
})



