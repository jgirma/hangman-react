import React, {useEffect} from "react"
import {checkWin} from "../helpers/helpers"

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, playable}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let tempPlayable = playable;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win"){
    finalMessage="Congrats you Win!!";
    finalMessageRevealWord = selectedWord;
    tempPlayable= false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "loss"){
    finalMessage = "Sorry Sir/Ma'am but you lost this time.";
    finalMessageRevealWord = `...... the word was ${selectedWord}`;
    tempPlayable= false;
  }

  useEffect(() => {
   setPlayable(tempPlayable);
 });
  return(
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
     <div className="popup">
       <h2>{finalMessage}</h2>
       <h3>{finalMessageRevealWord}</h3>
       <button onClick={playAgain}>Play Again</button>
     </div>
   </div>
  )
}

export default Popup
