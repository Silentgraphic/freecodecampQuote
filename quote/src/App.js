import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuote } from './features/quote';

function App() {
  const quoteSlice = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Quote: {quoteSlice.quote}</p>
      <p>by: {quoteSlice.author}</p>
      <button onClick={() => dispatch(updateQuote())}>Get quote</button>
    </div>
  );
}

export default App;
