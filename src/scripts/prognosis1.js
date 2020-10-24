// Прогноз вице-премьера Татьяны Голиковой о росте на 16% - 18% jn 13 апреля 2020 г.
// https://tass.ru/obschestvo/8231339
// http://i.imgur.com/qwLNZ2b.png


//total ill people in Russia at the 13th of April 2020
let numOfIll = 18328;
//the quantity days to the end of April
const dayTo30Apr = 17;
//the grow persent by meaning Golikova
const persent = 1.16;
//the order number of the prognosis array for the date of the 13th of April
const start = 83;

let prognosis1 = [];

for (let j = 0; j<start-1; j++) {
    prognosis1.push("");
};

prognosis1[start-1] = numOfIll;

for (let i = 0; i <dayTo30Apr; i++) {
    numOfIll = parseInt(numOfIll*persent);
    prognosis1[start+i] = numOfIll;
};

export default prognosis1;