import './App.css';
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      <Student name="Eshwar" age={23}/>
      <Student name="Charishma" age={23}/>
      <Student name="Cherry" age={23}/>
      <Student name="Eshu" age={23}/>
    </div>
  );
}

export default App;
