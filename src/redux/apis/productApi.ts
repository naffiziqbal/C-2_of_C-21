import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://tech-net-backend.vercel.app/" }),
    tagTypes: ['comment'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`

        }),
        postComment: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `comment/${id}`,
                method: 'PATCH',
                body: patch,
            })
        })

    })
})


export const { useGetProductsQuery, useGetSingleProductQuery, usePostCommentMutation } = productApi
