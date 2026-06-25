
import { textDisplay } from "../dom.js";

export function renderText(text){

  textDisplay.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const spans = [];

  for(const char of text){

    const span = document.createElement("span");
    span.classList.add("char");
    span.innerText = char === " " ? "\u00A0":char;

    spans.push(span);
    fragment.appendChild(span);
  }
  textDisplay.appendChild(fragment);

  return spans;
}
    
