import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const featuresSlice = createSlice({
    name: 'featuresCheck',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart.push(...action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const { setCart, removeFromCart, clearCart } = featuresSlice.actions

export default featuresSlice.reducer