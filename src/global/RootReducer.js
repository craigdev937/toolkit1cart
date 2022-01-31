import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductSlice";

export const RootReducer = configureStore({
    reducer: {
        products: ProductReducer
    },
});




