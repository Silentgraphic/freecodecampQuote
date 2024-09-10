import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const quoteSlice = useSelector((state) => state.quote.value);
  return (
    <div className="App">
      <p>Quote: {quoteSlice.value}</p>
    </div>
  );
}

export default App;
