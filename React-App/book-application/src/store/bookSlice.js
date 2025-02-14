import { createSlice } from "@reduxjs/toolkit";
import book from "../models/books";

//creating book slice which state and a method equal to setState 

const bookSlice = createSlice({
    name : 'books',
    //like declaring state
    initialState : {
        books : [],
        sampleBooks : [],
        selectedBook : null,
        showAddBook : false,
        error : null
    },
    reducers: {

        setBooks : (state , action) => {
            state.books = action.payload;
        },
        setSampleBooks : (state , action) => {
            state.sampleBooks = action.payload;
        },
        setSelectedBook : (state , action) => {
            state.selectedBook = action.payload;
        },
        toggleAddBook : (state , action) => {
            state.showAddBook = action.payload;
        },
        setError : (state , action) => {
            state.error = action.payload;
        }

    }
});


export const { setBooks , setSampleBooks , setSelectedBook , toggleAddBook , setError } = bookSlice.actions;
export default bookSlice.reducer;
