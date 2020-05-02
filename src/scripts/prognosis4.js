//Sberbank prognosis of new ill in a day
import prognosis4 from "../json/prognosis4.json";

let prognosis4Sber = []; //the new array for graph
let start4Sber = 29; // the quantity of days since begining of data to the first day of this prognosis
let currentIllOf2April = 3548; //official quantity of ill people of the 2nd of April - 
//the day before first day of this prognosis


for(let i = 0; i<start4Sber; i++) {
    prognosis4Sber.push("");
}

for(let item in prognosis4) {
    currentIllOf2April = currentIllOf2April + prognosis4[item];
    prognosis4Sber.push(currentIllOf2April);
};

export default prognosis4Sber;