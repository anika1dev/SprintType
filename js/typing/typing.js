import { strictToggle, totalTypedCharacters, updateUI } from "../dom.js";
import { state } from "../state.js";
import { updateStats } from "../stats.js";
import { getElapsedTime, startTimer } from "../timer.js";
import { updateScroll } from "./scroll.js";


export function handleKeyDown(e){
  if(state.testFinished){
    return;
  }
  const key = e.key;
  
  const currentSpan = getCurrentSpan();
  if(!currentSpan)  return;
  const currentChar = currentSpan.innerText === "\u00A0" ? " ": currentSpan.innerText;
  
  if(key==="Backspace"){
    handleBackspace();
    updateUI();
    return;
  }

  if(key.length !== 1 && key !== " "){
    return;
  }

  startTimer();

  if(currentChar === key){
    state.correctChars++;
    moveToNextCharacter("black");
  }else{
    state.incorrectChars++;
    moveToNextCharacter("rgb(193, 49, 49)");
  }
  state.totalTypedChars++;
  state.elapsedTime = getElapsedTime();
  updateStats();
  updateUI();


  if(strictToggle.checked){
    getCurrentSpan().style.color = "rgb(193, 49, 49)";
    return;
  }
  
}


function handleBackspace(){
  const currentSpan = getCurrentSpan();
  if(currentSpan.style.color === "rgb(193, 49, 49)"){
      currentSpan.style.color = "";
  }else{
    if(state.currentIndex > 0){
      currentSpan.classList.remove("active");
      state.currentIndex--;
      updateScroll(state.currentIndex, false);
      const previousSpan = getCurrentSpan();

      previousSpan.style.color = "";
      previousSpan.classList.add("active");
    }else{
      return;
    }
  }
}

function getCurrentSpan(){
  return state.spans[state.currentIndex];
}

function moveToNextCharacter(characterColor){
  const currentSpan = getCurrentSpan();

  currentSpan.style.color = characterColor;
  currentSpan.classList.remove("active");

  state.currentIndex++;
  updateScroll(state.currentIndex, true);

  const nextSpan = getCurrentSpan();

  if(nextSpan){
    nextSpan.classList.add("active");
  }
}