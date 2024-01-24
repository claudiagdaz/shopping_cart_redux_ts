import { createSlice } from "@reduxjs/toolkit";

export type CartItem = Record<string, number>

export interface Cart {
    items: CartItem
}

const initialState: Cart = {
    items: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer
