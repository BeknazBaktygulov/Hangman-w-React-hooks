
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
        <Popup />
        <Notification />
      </div>
      
    </div>
  );
}

export default App;
