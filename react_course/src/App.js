import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [counter, setCounter] = useState(1);

  const incrementHandler = () => {
    setCounter(counter + 1);
  }
  const decrementHandler = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <h1 className='heading'>{counter}</h1>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
