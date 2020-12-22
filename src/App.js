import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import CategoryPopup from './components/CategoryPopup';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';
import {beginWithWord} from './helpers/helpers'

import './App.css';

let selectedWord = " "
const sports = ['eagles', 'flames', 'pelicans', 'heat', 'thunder', 'penguins', 'raptors', 'leafs', 'oilers', 'cowboys'];
const prog = ['python', 'ruby', 'java', 'scratch', 'javascript', 'typescript', 'bash', 'sql', 'swift', 'html'];

function App() {
  const [playable, setPlayable] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(false);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    selectedWord = " "
  }

  function setIndex(i) {
    selectedWord = beginWithWord(i, sports, prog);
    setPlayable(true);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <CategoryPopup setIndex={setIndex} selectedWord={selectedWord} />
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} playable={playable} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
