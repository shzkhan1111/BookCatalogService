//store is like a place for reducers and is registed in the provider  of app component 

import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./bookSlice";
import cartReducer from "./cartSlice";

export const store =  configureStore({
    reducer : {
        books : bookReducer,
        cart : cartReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
