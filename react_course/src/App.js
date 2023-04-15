import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Insta from './components/Insta';
import Mail from './components/Mail';

function App() {

  

// [] -> useEffect will be called only once i.e, at the beginning of the rendering
//We can add dependencies by separating them with commas

  // console.log("Fn body called")
  const navLinkStyles = ({isActive}) => {
    return {
      color: isActive ? 'red' : 'black',
      fontSize: '25px',
      textDecoration: isActive ? 'underline' : 'none'
    }

  }

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul style={{backgroundColor:'white',display: 'flex', justifyContent: 'space-between', padding:'0 2rem'}}>
            <li>
              <NavLink style={navLinkStyles} to="/">Home</NavLink>

            </li>
            <li>
              <NavLink style={navLinkStyles} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
           
          <Route path="/about" element={<About />} />
            
          <Route path="/contact" element={<Contact />} >
          <Route path='insta' element={<Insta />}/>
            <Route path='mail' element={<Mail />}/>
          </Route>

          <Route path='*' element={<Error />}>
            
          </Route>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
