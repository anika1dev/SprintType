import { fifteenSec, oneTwentySec, sixtySec, textDisplay, thirtySec } from "./dom.js";
import { strictToggle } from "./dom.js";
import { modeMsg } from "./dom.js";
import { restartBtn } from "./dom.js";

import { getText } from "./text/textSource.js";
import { renderText } from "./text/textRenderer.js";
import { state } from "./state.js";
import { handleKeyDown } from "./typing/typing.js";

import { restartTest } from "./restart.js";
import { setDuration } from "./timer.js";

restartBtn.addEventListener("click", restartTest);
fifteenSec.addEventListener("click", (e) => {
  setDuration(15);
  e.target.blur();
});
thirtySec.addEventListener("click", (e) => {
  setDuration(30);
  e.target.blur();
});
sixtySec.addEventListener("click", (e) => {
  setDuration(60);
  e.target.blur();
});
oneTwentySec.addEventListener("click", (e) => {
  setDuration(120);
  e.target.blur();
});

export const saveMode = localStorage.getItem("strictMode");


const text = getText();
state.spans = renderText(text);
state.spans[0].classList.add("active");


document.addEventListener("keydown", handleKeyDown);


strictToggle.addEventListener("change", ()=>{
  if(strictToggle.checked){
    modeMsg.innerText = "Refresh page to apply Strict Mode";
  }
  localStorage.setItem("strictMode", strictToggle.checked);
});
  
if(saveMode === "true"){
  strictToggle.checked = true;
}

export function focusTypingArea() {
  requestAnimationFrame(() => {
    document.querySelector("#textDisplay")?.focus();
  });
}