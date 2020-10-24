// import ill from "../json/ill.json";
// import death from "../json/dead.json";
// import recover from "../json/recover.json";

// import {ill, death, recover} from "./getInfo";
// import {illness, deaths, recovers} from "./getInfo";


//arrays of data: illness, deaths, recovers and nowIll
// let illness = [], deaths = [], recovers = [], illnessClear = [], nowIll = [];
// let illnessClear = [], nowIll = [];



// for (let item in ill) {
//     illness.push(ill[item]);
// };
// for (let item in ill) {
//     if (ill[item] == 0 || ill[item] == "") break;
//     illnessClear.push(ill[item]);
// };
// for (let item in recover) {
//     recovers.push(recover[item]);
// };
// for (let item in death) {
//     deaths.push(death[item]);
// };
// for (let i = 0; i < illnessClear.length; i++) {
//     nowIll.push(illness[i] - deaths[i] - recovers[i]);
// };

// export {illness, deaths, recovers, illnessClear, nowIll};

// const url = 'https://api.covid19api.com/country/russia/status/';
// let illness = [], deaths = [], recovers = [], illnessClear = [], nowIll = [], ill, death, recover;

// async function getData(form) {
//     let response = await fetch(url+form);
//     if (response.ok) {
//         let json = await response.json();

//         // console.log(json);

//         let arr = []; // new array of data

//         //create new arrays of data
//         json.map(res => {
//             let dayValue = res.Cases;
//             arr.push(dayValue);
//         })

//         console.log(arr);
//         return arr;
//     } else {
//         console.log("Ошибка HTTP: " + response.status);
//     };
// };

// new Promise(()=>{
//     ill = getData('confirmed');
//     console.log(ill);
//     death  = getData('deaths');
//     recover = getData('recovered');
// }).then(() => {
//     for (let item in ill) {
//         illness.push(ill[item]);
//     };
//     for (let item in ill) {
//         if (ill[item] == 0 || ill[item] == "") break;
//         illnessClear.push(ill[item]);
//     };
//     for (let item in recover) {
//         recovers.push(recover[item]);
//     };
//     for (let item in death) {
//         deaths.push(death[item]);
//     };
//     for (let i = 0; i < illnessClear.length; i++) {
//         nowIll.push(illness[i] - deaths[i] - recovers[i]);
//     };
//     console.log(illness, deaths, recovers, illnessClear, nowIll);
//     return {illness, deaths, recovers, illnessClear, nowIll};
// });

// export {illness, deaths, recovers, illnessClear, nowIll};