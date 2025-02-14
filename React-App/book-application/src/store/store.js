//store is like a place for reducers and is registed in the provider  of app component 

import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./bookSlice";
import cartReducer from "./cartSlice";

export default  configureStore({
    reducer : {
        books : bookReducer,
        cart : cartReducer
    }
});

