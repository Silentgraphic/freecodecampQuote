import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuote } from '../features/quote';

function QuoteBox() {
    const quoteSlice = useSelector((state) => state.quote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateQuote());
    }, [dispatch]);

    if (quoteSlice.status === "Loading") {
        return (
            <div id="Loading">
                <span>Loading...</span>
            </div>
        );
    } else if (quoteSlice.status === "Fulfilled") {
        return (
            <div id="quote-box">
                <h1>Get a Random Quote</h1>
                <q id="text">{quoteSlice.quote}</q>
                <i id="author">by: {quoteSlice.author}</i>
                <button id="new-quote" onClick={() => dispatch(updateQuote())}>Get quote</button>
                <a id="tweet-quote" href='twitter.com/intent/tweet'>Tweet</a>
            </div >
        );
    }
}

export default QuoteBox;