import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Comp1 from "./components/Comp1";

const AppState = createContext();

function App() {
  const [data, setData] = useState("Eshwar Context API");

  return (
    <>
      <AppState.Provider value={data}>
        <Header />
        <Comp1 />
      </AppState.Provider>
    </>
  );
}

export default App;
export {AppState};
