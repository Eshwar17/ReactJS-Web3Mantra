import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

function App() {

  

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  // console.log("Fn body called")

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul style={{display: 'flex', justifyContent: 'space-between', padding:'0 2rem'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
           
          <Route path="/about" element={<About />} />
            
          <Route path="/contact" element={<Contact />} />

          <Route path='*' element={<Error />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
