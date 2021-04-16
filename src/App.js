import './App.css';
import Figure from './Components/Figure';
import Header from './Components/Header';
import Word from './Components/Word';
import WrongLetters from './Components/WrongLetters';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
}

export default App;
