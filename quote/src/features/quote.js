import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    quote: ""
};

export const updateQuote = createAsyncThunk("quote/updateQuote", async () => {
    const url = "https://zenquotes.io/api/quotes";
    const res = await fetch(url)
        .then((data) => data.json());
    return res;
});

export const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateQuote.pending, (state, action) => {
                state.quote = "Loading";
            })
            .addCase(updateQuote.fulfilled, (state, action) => {
                state.quote = action.payload["0"].q;
            })
            .addCase(updateQuote.rejected, (state, action) => {
                state.quote = "Error has occured";
            });
    }
});

export default quoteSlice.reducer; 