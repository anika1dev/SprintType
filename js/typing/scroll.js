import { state } from "../state.js";
import { textDisplay } from "../dom.js";


export function updateScroll(currentIndex, isForward){

  if(isForward){
    checkLineShiftDown(currentIndex);
  }else{
    checkLineShiftUp(currentIndex);
  }

}


function checkLineShiftUp(index){
  if(index <= 0 || index >= state.spans.length-1)   return;

  const currentTop = state.spans[index].getBoundingClientRect().top;
  const nextTop = state.spans[index+1].getBoundingClientRect().top;

  if(currentTop < nextTop){
    if(state.lineCount >0){
      state.lineCount--;
    }
    moveDown();
  }
}

function checkLineShiftDown(index){
  if(index <= 0 || index >= state.spans.length)   return;

  const prevTop = state.spans[index - 1].getBoundingClientRect().top;
  const currentTop = state.spans[index].getBoundingClientRect().top;

  if(currentTop > prevTop){
    state.lineCount++;
    if(state.lineCount >= 2){
      moveUp();
    }
  }
}

function moveUp(){
  const lineHeight = 48;
  state.currentTranslate += lineHeight;
  textDisplay.style.transform = `translateY(-${state.currentTranslate}px)`;
}

function moveDown(){
  const lineHeight = 48;
  state.currentTranslate -= lineHeight;
  if(state.currentTranslate < 0){
    state.currentTranslate = 0;
  }
  textDisplay.style.transform = `translateY(-${state.currentTranslate}px)`;
}