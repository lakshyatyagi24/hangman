import './App.css';
import Figure from './Components/Figure';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
      </div>
    </>
  );
}

export default App;
