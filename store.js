import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Carrtslice";
const store =configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store;