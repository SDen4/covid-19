import {illnessClear} from "./statistic";

let startDate = new Date(2020, 2, 4),
    dates = [];

for(let i = 0; i<illnessClear.length; i++) {
    startDate.setDate(startDate.getDate() + 1);
    dates.push(startDate.toLocaleString("ru", {day: 'numeric', month: 'numeric', year: '2-digit'}));
};

export default dates;