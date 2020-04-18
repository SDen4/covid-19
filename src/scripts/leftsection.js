import {illness, deaths, recovers} from "./graph";

const lastIllDisplay = document.querySelector(".data__display_ill"),
      lastDeathDisplay = document.querySelector(".data__display_dead"),
      lastRecoverDisplay = document.querySelector(".data__display_recover"),
      curIllDisplay = document.querySelector("#data__common_ill"),
      curDeathDisplay = document.querySelector("#data__common_dead"),
      curRecoverDisplay = document.querySelector("#data__common_recover"),
      persentIll = document.querySelector("#data__persent_ill"),
      persentDead = document.querySelector("#data__persent_dead"),
      persentRecover = document.querySelector("#data__persent_recover");

// the total data of the day
let lastIll, curIll, preLastIll,
    lastDeath = deaths[deaths.length-1],
    lastRecover = recovers[recovers.length-1],
    preLastDeath = deaths[deaths.length-2],
    preLastRecover = recovers[recovers.length-2];

for(let i = 0; i<illness.length; i++) {
    if(illness[i] === 0 || illness[i] === undefined || illness[i] === "") {
        lastIll = illness[i-1];
        preLastIll = illness[i-2];
        curIll = lastIll - illness[i-2];
        break;
    }
};

//diaplay the total data of the day
lastIllDisplay.textContent = lastIll;
lastDeathDisplay.textContent = lastDeath;
lastRecoverDisplay.textContent = lastRecover;

// the current data of the day
let curDeath = deaths[deaths.length-1] - deaths[deaths.length-2],
    curRecover = recovers[recovers.length-1] - recovers[recovers.length-2];

//diaplay the current data of the day
curIllDisplay.textContent = curIll;
curDeathDisplay.textContent = curDeath;
curRecoverDisplay.textContent = curRecover;

//display the persent of new cases
persentIll.textContent = `+${((curIll/preLastIll)*100).toFixed(1)}%`;
persentDead.textContent = `+${((curDeath/preLastDeath)*100).toFixed(1)}%`;
persentRecover.textContent = `+${((curRecover/preLastRecover)*100).toFixed(1)}%`;