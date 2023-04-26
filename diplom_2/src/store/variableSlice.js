import { createSlice } from "@reduxjs/toolkit";

const variablesSlice = createSlice({
    name: 'variables',
    initialState: {
        signIn: false,
        signUp: false,
    },
    reducers: {
        signIn(state, action) {
            state.signIn = action.payload
        },
        signUp(state, action) {
            state.signUp = action.payload
        },
    }
})

export const { signIn, signUp} = variablesSlice.actions

export default variablesSlice.reducer