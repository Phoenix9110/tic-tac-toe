import logo from './logo.svg';
import './App.css';
import './Board'
import Board from './Board';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC - TAC - TOE</h1>
      </header>
      <main>
        <Board/>
      </main>
    </div>
  );
}

export default App;
