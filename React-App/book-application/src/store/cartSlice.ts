import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from "../models/books";

interface CartState {
    items : Book[]
}

const initialState : CartState= {
    items: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Book>) {
            state.items.push(action.payload);
        },
        removeItemFromCart(state, action : PayloadAction<{id: number}>) {
            debugger;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart(state) {
            debugger;
            state.items = [];
        }

    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;