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
                <p>Loading...</p>
            </div>
        );
    } else if (quoteSlice.status === "Fulfilled") {

        return (
            <div id="quote-box">
                <p id="text">Quote: {quoteSlice.quote}</p>
                <p id="author">by: {quoteSlice.author}</p>
                <button id="new-quote" onClick={() => dispatch(updateQuote())}>Get quote</button>
                <a id="tweet-quote" href='twitter.com/intent/tweet'>Tweet</a>
            </div >
        );
    }
}

export default QuoteBox;