//store is like a place for reducers and is registed in the provider  of app component 

import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "./bookSlice";

export default  configureStore({
    reducer : {
        books : bookReducer
    }
});