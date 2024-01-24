import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductSlice";
import cartReducer from "../features/cart/CartSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;