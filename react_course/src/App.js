import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';


function App() {

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("UseEffect called")
  }, [state]) 

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  console.log("Fn body called")

  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state+1)}>Click Me {state}</button>
    </div>
  );
}

export default App;
