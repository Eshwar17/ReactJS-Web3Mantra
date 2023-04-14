import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';


function App() {

  const [state, setState] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
  }, [state]) 

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  // console.log("Fn body called")

  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state+1)}>Click Me {state}</button>
    </div>
  );
}

export default App;
