import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Comp1 from "./components/Comp1";

function App() {
  const [data, setData] = useState("Eshwar Context API");

  return (
    <>
      <Header />
      <Comp1 data={data}/>
    </>
  );
}

export default App;
