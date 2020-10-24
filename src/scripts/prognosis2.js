// Прогноз главы Роспотребнадзора Анны Поповой
// Источник: https://ria.ru/20200413/1569983282.html
// Скирин: http://i.imgur.com/hk6FfAS.png


//total ill people in Russia at the 13th of April 2020 - at the day if the news
let numOfIll = 18328;
//the duration of grow
const duration = 7;
// the duration afte grow
const durationAfter = 10;
//the grow persent is like in Golikova's prognosis
const persent = 1.16;
//the order number of the prognosis array for the date of the 13th of April
const start = 83;

let prognosis2 = [];

for (let j = 0; j<start-1; j++) {
    prognosis2.push("");
};

prognosis2[start-1] = numOfIll;

for (let i = 0; i <duration; i++) {
    numOfIll = parseInt(numOfIll*persent);
    prognosis2[start+i] = numOfIll;
};

let lastDayGrowValue = prognosis2[prognosis2.length-1];

for (let i = 0; i <durationAfter; i++) {
    prognosis2.push(lastDayGrowValue);
};


export default prognosis2;