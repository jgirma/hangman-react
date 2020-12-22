export function showNotification(setter) {
  setter(true)
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  //  check for win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = "";
    }
  });

  //  check for loss
  if(wrong.length === 6){
    status = "loss";
  }
  return status;
}

export function beginWithWord(index, arrayOne, arrayTwo){
  let word = "";
  if(index === 0){
    word = arrayOne[Math.floor(Math.random() * arrayOne.length)];
  } else {
    word = arrayTwo[Math.floor(Math.random() * arrayTwo.length)];
  }
  return word;
}
