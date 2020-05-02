import ill from "../json/ill.json";
import death from "../json/dead.json";
import recover from "../json/recover.json";


//arrays of data: illness, deaths, recovers and nowIll
let illness = [], deaths = [], recovers = [], illnessClear = [], nowIll = [];

for (let item in ill) {
    illness.push(ill[item]);
}
for (let item in ill) {
    if (ill[item] == 0 || ill[item] == "") break;
    illnessClear.push(ill[item]);
};
for (let item in recover) {
    recovers.push(recover[item]);
};
for (let item in death) {
    deaths.push(death[item]);
};
for (let i = 0; i < deaths.length; i++) {
    nowIll.push(illness[i] - deaths[i] - recovers[i]);
};

export {illness, deaths, recovers, illnessClear, nowIll};