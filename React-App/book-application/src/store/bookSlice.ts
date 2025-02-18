import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../models/books";

interface BoolState {
    books: Book[],
    sampleBooks: Book[],
    selectedBook: Book | null,
    showAddBook: boolean,
    error: string | null
}

const initialStateBook : BoolState = {
    books: [],
    sampleBooks: [],
    selectedBook: null,
    showAddBook: false,
    error: null
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initialStateBook,
    reducers: {

        setBooks: (state, action : PayloadAction<Book[]>) => {
            state.books = action.payload;
        },
        setSampleBooks: (state, action : PayloadAction<Book[]>) => {
            state.sampleBooks = action.payload;
        },
        setSelectedBook: (state, action : PayloadAction<Book | null>) => {
            state.selectedBook = action.payload;
        },
        toggleAddBook: (state, action : PayloadAction<boolean>) => {
            state.showAddBook = action.payload;
        },
        setError: (state, action : PayloadAction<string | null>) => {
            state.error = action.payload;
        }

    }
});


export const { setBooks, setSampleBooks, setSelectedBook, toggleAddBook, setError } = bookSlice.actions;
export default bookSlice.reducer;
