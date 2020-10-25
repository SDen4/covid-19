import {illness, deaths, recovers, nowIll, dates} from './getInfo';
// import {qw} from './getInfo';
// // qw();

// let {illness, deaths, recovers, nowIll, dates} = qw();
// console.log(illness);



const commonIllDisplay = document.querySelector('#data__display_ill'),
    commonDeathDisplay = document.querySelector('#data__display_dead'),
    commonRecoverDisplay = document.querySelector('#data__display_recover'),
    curIllDisplay = document.querySelector('#data__common_ill'),
    curDeathDisplay = document.querySelector('#data__common_dead'),
    curRecoverDisplay = document.querySelector('#data__common_recover'),
    curNowIllDisplay = document.querySelector('#data__common_nowIll'),
    persentIll = document.querySelector('#data__persent_ill'),
    persentDead = document.querySelector('#data__persent_dead'),
    persentRecover = document.querySelector('#data__persent_recover'),
    persentNowIll = document.querySelector('#data__persent_nowIll');


// the total data of the day
let commonIll, curIll, preLastIll,
    commonDeath = deaths[deaths.length-1],
    commonRecover = recovers[recovers.length-1],
    preLastDeath = deaths[deaths.length-2],
    preLastRecover = recovers[recovers.length-2],
    preLastNowIll = nowIll[nowIll.length-2];

//the current data of illness of last day
for(let i = 0; i<=illness.length; i++) {
    commonIll = illness[i-1];
    preLastIll = illness[i-2];
    curIll = commonIll - illness[i-2];
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

//display the persent of new cases(quantity of current ill people)
if( (curNowIll/preLastNowIll-1)*100 < 0.1) {
    persentNowIll.textContent = '0.0%';
    persentNowIll.style.color = '#228B22';
}else if(curNowIll > preLastNowIll) {
    persentNowIll.textContent = `+${((curNowIll/preLastNowIll-1)*100).toFixed(1)}%`;
    persentNowIll.style.color = '#A53E3E';
}else{
    persentNowIll.textContent = `${((curNowIll/preLastNowIll-1)*100).toFixed(1)}%`;
    persentNowIll.style.color = '#228B22';
};


//test & control errors
if(!isFinite(commonIll) || commonIll == '') {
    commonIllDisplay.textContent = '?';
    curIllDisplay.textContent = '?';
    persentIll.textContent = '?';
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    persentNowIll.style.color = '#A53E3E';
    throw new Error('Left section. Error in data (Common ill)');
};

if(curNowIll<0) {
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    throw new Error('Left section. Error in calculation! (nowill)');
};

if(!isFinite(commonDeath) || commonDeath == '') {
    curDeathDisplay.textContent = '?';
    persentDead.textContent = '?';
    commonDeathDisplay.textContent = '?';
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    throw new Error('Left section. Error in data (Common death)');
};

if(!isFinite(commonRecover) || commonRecover == '') {
    curRecoverDisplay.textContent = '?';
    persentRecover.textContent = '?';
    commonRecoverDisplay.textContent = '?';
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    throw new Error('Left section. Error in data (Common recover)');
};

if(commonIll-commonDeath-commonRecover !== curNowIll) {
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    persentNowIll.style.color = '#A53E3E';
    throw new Error('Left section. Error in calculation nowill! (check the current data of all parts: dead, recover and ill)');
};

if(curIll<0) {
    curIllDisplay.textContent = '?';
    persentIll.textContent = '?';
    curNowIllDisplay.textContent = '?';
    persentNowIll.textContent = '?';
    persentNowIll.style.color = '#A53E3E';
    throw new Error('Left section. Error: curIll can not be less than zero!');
};