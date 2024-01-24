import { createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    imageURL: string,
    imageAlt: string,
    imageCredit: string
}

export interface ProductsState {
    products: { [productID: string]: Product}
}

const initialState: ProductsState = {
    products: {}
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer