// import {illness, deaths, recovers, illnessClear, nowIll} from "./getInfo";

// let startDate = new Date(2020, 2, 4),
//     dates = [];

// for(let i = 0; i<illnessClear.length; i++) {
//     startDate.setDate(startDate.getDate() + 1);
//     dates.push(startDate.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: '2-digit'}));
// };

// export default dates;

// let illness = [], deaths = [], recovers = [];

// let dates = []; // new array of data
// const url = 'https://api.covid19api.com/country/russia/status/';

// async function getArrayOfDates() {
//     let response = await fetch(url+'deaths');
//     if (response.ok) {
//         let json = await response.json();

//         // console.log(json);

//         //create new arrays of data
//         json.map(res => {
//             let dayValue = res.Date;
//             dates.push(dayValue.slice(0, 10));
//         });

//         console.log(dates);
//     } else {
//         console.log("Ошибка HTTP: " + response.status);
//     };
// };

// window.onload = getArrayOfIllness;
// const url = 'https://api.covid19api.com/country/russia/status/';

// async function getArrayOfNewData(form) {
//     let array = []; // new array of data
//     let response = await fetch(url+form);
//     if (response.ok) {
//         let json = await response.json();

//         // console.log(json);

//         //create new arrays of data
//         json.map(res => {
//             array.push(res.Cases);
//         });

//         console.log(array);
//     } else {
//         console.log("Ошибка HTTP: " + response.status);
//     };
// };

// window.onload = () => {
    // getArrayOfDates();
    // illness = getArrayOfNewData('confirmed');
    // deaths  = getArrayOfNewData('deaths');
    // recovers = getArrayOfNewData('recovered');

// };

// export default illness;
// export default dates;

// export default {illness, deaths, recovers, dates};