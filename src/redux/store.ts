import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import filterSlice from './features/product/filterSlice'
import { apis } from './apis/apis'



export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        [apis.reducerPath]: apis.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apis.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
