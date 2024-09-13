import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuote } from '../features/quote';

function QuoteBox() {
    const quoteSlice = useSelector((state) => state.quote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateQuote());
    }, [dispatch]);

    switch (quoteSlice.status) {
        case "Loading":
            return (
                <div id="Loading">
                    <span>Loading...</span>
                </div>
            );
        case "Fulfilled":
            return (
                <div id="quote-box">
                    <h1>Get a Random Quote</h1>
                    <q id="text">{quoteSlice.quote}</q>
                    <i id="author">by: {quoteSlice.author}</i>
                    <button id="new-quote" onClick={() => dispatch(updateQuote())}>Get quote</button>
                    <a id="tweet-quote" href='twitter.com/intent/tweet'>Tweet</a>
                </div >
            );
        case "Error":
            return (
                <div id="Error">
                    <span>{quoteSlice.quote}</span>
                </div>
            );
        default:
            return (
                <div>
                    <span>Something went wrong!</span>
                </div>
            );
    }
}

export default QuoteBox;