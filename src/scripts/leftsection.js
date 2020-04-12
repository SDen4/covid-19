import {illness, deaths, recovers} from "./graph";

const lastIllDisplay = document.querySelector(".data__display_ill"),
      lastDeathDisplay = document.querySelector(".data__display_dead"),
      lastRecoverDisplay = document.querySelector(".data__display_recover"),
      curIllDisplay = document.querySelector(".data__common__ill"),
      curDeathDisplay = document.querySelector(".data__common__dead"),
      curRecoverDisplay = document.querySelector(".data__common__recover");


// the total data of the day
let lastIll = illness[illness.length-1],
    lastDeath = deaths[deaths.length-1],
    lastRecover = recovers[recovers.length-1];

    //diaplay the total data of the day
lastIllDisplay.textContent = lastIll;
lastDeathDisplay.textContent = lastDeath;
lastRecoverDisplay.textContent = lastRecover;


// the current data of the day
let curIll = illness[illness.length-1] - illness[illness.length-2],
    curDeath = deaths[deaths.length-1] - deaths[deaths.length-2],
    curRecover = recovers[recovers.length-1] - recovers[recovers.length-2];

    //diaplay the current data of the day
curIllDisplay.textContent = curIll;
curDeathDisplay.textContent = curDeath;
curRecoverDisplay.textContent = curRecover;