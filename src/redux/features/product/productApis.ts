import { apis } from "@/redux/apis/apis";

const productApis = apis.injectEndpoints({
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


export const { useGetCommentsQuery, useGetSingleProductQuery, useGetProductsQuery, usePostCommentMutation, } = productApis
