import { textDisplay, updateUI } from "./dom.js";
import { focusTypingArea } from "./main.js";
import { state } from "./state.js";
import { renderText } from "./text/textRenderer.js";
import { getText } from "./text/textSource.js";
import { resetTimer } from "./timer.js";



export function restartTest(){
  resetState();
  updateUI();
  focusTypingArea();

  textDisplay.style.transform = "translateY(0)";

  state.currentText = getText();
  state.spans = renderText(state.currentText);
  
  if(state.spans.length > 0){
    state.spans[0].classList.add("active");
  }


}

function resetState(){
  state.currentIndex = 0;
  state.currentTranslate = 0;
  state.lineCount = 0;
  state.totalTypedChars = 0;
  state.correctChars = 0;
  state.incorrectChars = 0;
  state.grossWPM = 0;
  state.netWPM = 0;
  state.accuracy = 100;
  state.testFinished = false;
  resetTimer();
}