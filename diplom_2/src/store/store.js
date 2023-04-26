import { configureStore } from "@reduxjs/toolkit";
import variableReducers from "./variableSlice";
import userReducers from './userSlice'


export default configureStore({

    reducer: {
        user: userReducers,
        var: variableReducers,
    }
})