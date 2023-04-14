import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  // console.log("Fn body called")

  return (
    <div className="App">
      <Header />
      <Home />
      
    </div>
  );
}

export default App;
