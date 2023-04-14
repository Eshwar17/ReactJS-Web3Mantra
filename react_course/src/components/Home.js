import React, {useState, useEffect} from 'react'

const Home = () => {
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
  return (
    <div>
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
      <button onClick={() => setState(state+10)}>Load More {state}</button>
    </div>
  )
}

export default Home
