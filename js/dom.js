import { state } from "./state.js";

export const strictToggle = 
    document.getElementById("strictToggle");

export const modeMsg = 
    document.getElementById("modeMsg");

export const textDisplay = 
    document.getElementById("textDisplay");

export const targetTextContainer = 
    document.getElementById("targetTextContainer");

export const restartBtn = 
    document.getElementById("restartTest");

export const grossSpeed =
    document.getElementById("grossWPM");

export const netSpeed = 
    document.getElementById("netWPM");

export const typingAccuracy = 
    document.getElementById("accuracy");

export const totalTypedCharacters = 
    document.getElementById("totalTyped");

export const timeRemaining = 
    document.getElementById("timeRemaining");

export const fifteenSec = 
    document.getElementById("fifteenSec");

export const thirtySec = 
    document.getElementById("thirtySec");

export const sixtySec =
    document.getElementById("sixtySec");

export const oneTwentySec =
    document.getElementById("oneTwentySec");



export function updateUI(){
    grossSpeed.innerHTML = state.grossWPM;
    netSpeed.innerHTML = state.netWPM;
    typingAccuracy.innerHTML = state.accuracy;
    totalTypedCharacters.innerHTML = state.totalTypedChars; 
    timeRemaining.innerHTML = state.timeLeft;
}

setInterval(()=>{
    timeRemaining.innerHTML = state.timeLeft;
}, 1000);

