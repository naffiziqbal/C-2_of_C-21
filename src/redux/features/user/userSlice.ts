import { auth } from "@/lib/firebase"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth"

const initialState: any = {
    user: {
        email: null
    },
    isLoading: false,
    isError: false,
    error: null
}
export const createUser = createAsyncThunk("user/createUser", async ({ email, password }: any) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.user = action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true
                state.error = action.error.message
            })

    }
})


export default userSlice.reducer
