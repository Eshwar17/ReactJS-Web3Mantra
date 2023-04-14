import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  useEffect(() => {
    console.log("UseEffect called")
  })

  console.log("Fn body called")

  return (
    <div className="App">
      <Header />
      {console.log("INside JSX")}
    </div>
  );
}

export default App;
