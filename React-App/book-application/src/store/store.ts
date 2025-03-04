//store is like a place for reducers and is registed in the provider  of app component 

import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./bookSlice";
import cartReducer from "./cartSlice";
import authReducer from './authSlice';

export const store =  configureStore({
    reducer : {
        books : bookReducer,
        cart : cartReducer,
        auth : authReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
