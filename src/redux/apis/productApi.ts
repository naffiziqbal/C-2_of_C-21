import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ['comment'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getComments: builder.query({
            query: (id) => `comment/${id}`,
            providesTags: ['comment']
        }),

        getSingleProduct: builder.query({
            query: (id) => `product/${id}`
        }),
        postComment: builder.mutation({
            query: ({ id, ...comment }) => ({
                url: `comment/${id}`,
                method: 'POST',
                body: comment,
            }),
            invalidatesTags: ['comment']
        }),
    })
})


export const { useGetProductsQuery, useGetSingleProductQuery, useGetCommentsQuery, usePostCommentMutation } = productApi
