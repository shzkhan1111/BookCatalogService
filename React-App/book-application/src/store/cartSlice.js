import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.items.push(action.payload);
        },
        removeItemFromCart(state, action) {
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