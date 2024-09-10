import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote",
    initialState: { value: { quote: "" } },
    reducers: {
        updateQuote: (state, action) => {
            state.value = action.payload;
        }
    }
});

export default quoteSlice.reducer; 