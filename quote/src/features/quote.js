import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    quote: "",
    author: "",
    status: "Fulfilled"
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
                state.status = "Loading";
            })
            .addCase(updateQuote.fulfilled, (state, action) => {
                console.log(action.payload["0"].q);
                if (action.payload["0"].q === "Too many requests. Obtain an auth key for unlimited access.") {
                    state.quote = "Slow down! You have sent too many requests!";
                    state.status = "Error";
                } else {
                    state.quote = action.payload["0"].q;
                    state.author = action.payload["0"].a;
                    state.status = "Fulfilled";
                }
            })
            .addCase(updateQuote.rejected, (state, action) => {
                state.quote = "Error has occured";
                state.status = "Error";
            });
    }
});

export default quoteSlice.reducer; 