import { IProduct } from "@/types/globalTypes"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICart {
    cart: IProduct[],
    total: number
}
const initialState: ICart = {
    cart: [],
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_TO_CART: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.cart.find(data => data._id === action.payload._id)
            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity! += 1

            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
            state.total += action.payload.price
        },
        REMOVE_FROM_CART: (state, action: PayloadAction<IProduct>) => {
            state.cart = state.cart.filter(data => data._id !== action.payload._id)
            state.total -= action.payload.price * action.payload.quantity
        },
        REMOVE_SINGLE_PRODUCT: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.cart.find(data => data._id === action.payload._id)
            if (existingProduct.quantity! > 1) {
                existingProduct.quantity! = existingProduct.quantity! -= 1;
                state.total -= action.payload.price
            }

        }
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SINGLE_PRODUCT } = cartSlice.actions

export default cartSlice.reducer
