import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const UserDetails = () => {
  const {id} = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${id}`
      );
      const res = await get.json();
      setData(res[0]);
      console.log(res);
    }
    getData();
  },[]);
  return (
    <div>
    <h4>{data.id}</h4>
    <h4>{data.firstName}</h4>
    <h4>{data.lastName}</h4>
    <h4>{data.email}</h4>
    </div>
  )
}

export default UserDetails