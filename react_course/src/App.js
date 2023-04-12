
import './App.css';

function App() {
  const msg = <h1>I am Eshwar</h1>;
  return (
    <div className="App">
      <header className="App-header">
      {msg}
      <h3>We can use JavaScript directly using curly braces <span style={{color: 'blue'}}>{34 + 45}</span></h3>
      </header>
    </div>
  );
}

export default App;
