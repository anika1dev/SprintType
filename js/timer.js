import { focusTypingArea } from "./main.js";
import { restartTest } from "./restart.js";
import { state } from "./state.js";

export function startTimer(){

  if(!state.timerRunning){
    state.timerRunning = true;
    state.timeLeft = state.timerDuration;
    state.startTime = Date.now();

    state.timerId = setInterval(()=>{
      state.timeLeft--;
      if(state.timeLeft === 0){
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer(){
  clearInterval(state.timerId);
  
  state.timerRunning = false;
  state.testFinished = true;
}

export function resetTimer(){
  clearInterval(state.timerId);
  state.timerRunning = false;
  state.timerId = null;
  state.timeLeft = state.timerDuration;
}

export function getElapsedTime(){
  return Date.now() - state.startTime;
}

export function setDuration(duration){
    state.timerDuration = duration;
    restartTest();
    focusTypingArea();
}