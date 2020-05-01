import {illness, deaths, recovers, nowIll} from "./graph";

const commonIllDisplay = document.querySelector("#data__display_ill"),
      commonDeathDisplay = document.querySelector("#data__display_dead"),
      commonRecoverDisplay = document.querySelector("#data__display_recover"),
      curIllDisplay = document.querySelector("#data__common_ill"),
      curDeathDisplay = document.querySelector("#data__common_dead"),
      curRecoverDisplay = document.querySelector("#data__common_recover"),
      curNowIllDisplay = document.querySelector('#data__common_nowIll'),
      persentIll = document.querySelector("#data__persent_ill"),
      persentDead = document.querySelector("#data__persent_dead"),
      persentRecover = document.querySelector("#data__persent_recover"),
      persentNowIll = document.querySelector("#data__persent_nowIll");


// the total data of the day
let commonIll, curIll, preLastIll,
    commonDeath = deaths[deaths.length-1],
    commonRecover = recovers[recovers.length-1],
    preLastDeath = deaths[deaths.length-2],
    preLastRecover = recovers[recovers.length-2],
    preLastNowIll = nowIll[nowIll.length-2];


for(let i = 0; i<illness.length; i++) {
    if(illness[i] === 0 || illness[i] === undefined || illness[i] === "") {
        commonIll = illness[i-1];
        preLastIll = illness[i-2];
        curIll = commonIll - illness[i-2];
        break;
    }
};

//diaplay the total data of the day
commonIllDisplay.textContent = commonIll.toLocaleString('ru-RU');
commonDeathDisplay.textContent = commonDeath.toLocaleString('ru-RU');
commonRecoverDisplay.textContent = commonRecover.toLocaleString('ru-RU');

// the current data of the day
let curDeath = deaths[deaths.length-1] - deaths[deaths.length-2],
    curRecover = recovers[recovers.length-1] - recovers[recovers.length-2],
    curNowIll = nowIll[nowIll.length-1];

//diaplay the current data of the day
curIllDisplay.textContent = curIll.toLocaleString('ru-RU');
curDeathDisplay.textContent = curDeath.toLocaleString('ru-RU');
curRecoverDisplay.textContent = curRecover.toLocaleString('ru-RU');
curNowIllDisplay.textContent = curNowIll.toLocaleString('ru-RU');

//display the persent of new cases
persentIll.textContent = `+${((curIll/preLastIll)*100).toFixed(1)}%`;
persentDead.textContent = `+${((curDeath/preLastDeath)*100).toFixed(1)}%`;
persentRecover.textContent = `+${((curRecover/preLastRecover)*100).toFixed(1)}%`;
persentNowIll.textContent = `+${((curNowIll/preLastNowIll-1)*100).toFixed(1)}%`;
