import './App.css';
import Figure from './Components/Figure';
import Header from './Components/Header';
import WrongLetters from './Components/WrongLetters';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
      </div>
    </>
  );
}

export default App;
