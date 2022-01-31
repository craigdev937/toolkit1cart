import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://fakestoreapi.com/";
export const ProductsAPI = createApi({
    reducerPath: "ProductsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query({
            query: () => "/products",
        })
    }),
});



