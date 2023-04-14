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
    document.title = `(${state}) Employees Online`;
  }, [state]) 

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  // console.log("Fn body called")

  return (
    <div className="App">
      <Header />
      
      {
        data.map((element, index) => {
          return (
            <div className='data' key={index}>
              <h5>{element.firstName}</h5>
              <h5>{element.lastName}</h5>
              <h5>{element.email}</h5>
            </div>
          )
        })
      }
      <button className='loadmore' onClick={() => setState(state+10)}>Load More {state}</button>
    </div>
  );
}

export default App;
