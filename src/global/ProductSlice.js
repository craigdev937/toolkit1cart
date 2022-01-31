import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products";
export const fetchAll = createAsyncThunk("products/fetchAll", 
async () => {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("Fetch Failed!");
    const products = await res.json();
    return [...products];
});

const initialState = {
    products: [],
    status: null,
    error: null,
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAll.rejected]: (state, action) => {
            state.status = "Rejected",
            state.error = action.payload
        },
        [fetchAll.pending]: (state, action) => {
            state.status = "Pending"
        },
        [fetchAll.fulfilled]: (state, action) => {
            state.status = "Success",
            state.products = [...action.payload]
        },
    },
});

export const ProductReducer = ProductSlice.reducer;



