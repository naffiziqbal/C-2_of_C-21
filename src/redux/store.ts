import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import filterSlice from './features/product/filterSlice'
import { productApi } from './apis/productApi'



export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
