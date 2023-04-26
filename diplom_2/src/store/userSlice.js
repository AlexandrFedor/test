import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        JWT: "",
        role: "user",
        isLogged: false
    },
    reducers: {
        loggin(state, action) {
            state.username = action.payload.auth.login
            state.email = action.payload.auth.email
            state.JWT = action.payload.jwt
            state.role = action.payload.auth.role
            state.isLogged = true
        },
        logOut(state, action) {
            Cookies.remove('JWT')
            state.username = ''
            state.email = ''
            state.JWT = ''
            state.role = ''
            state.isLogged = false
        }
    }
})

export const { loggin, logOut } = userSlice.actions

export default userSlice.reducer