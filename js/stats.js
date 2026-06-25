import { state } from "./state.js";
import { getElapsedTime } from "./timer.js";


export function updateStats(){
  const elapsedMinute = getElapsedTime() / 60000;

  state.grossWPM = Math.round(getGrossWPM(elapsedMinute));
  state.netWPM = Math.max(0, Math.round(getNetWPM(elapsedMinute)));
  state.accuracy = Math.round(getAccuracy());
}

function getGrossWPM(elapsedMinute){
  if(elapsedMinute === 0)
    return 0;
  return (state.totalTypedChars / 5) / elapsedMinute;
}

function getNetWPM(elapsedMinute){
  if(elapsedMinute === 0)
    return 0;
  return getGrossWPM(elapsedMinute) - state.incorrectChars/elapsedMinute;
}

function getAccuracy(){
  if(state.totalTypedChars === 0){
    return 100;
  }
  return (state.correctChars / state.totalTypedChars) * 100;
}