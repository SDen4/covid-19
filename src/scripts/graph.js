import ill from "../json/ill.json";
import death from "../json/dead.json";
import recover from "../json/recover.json";
import prognosis1 from "./prognosis1";
import prognosis2 from "./prognosis2";
import prognosis3Author from './prognosis3';
import dates from '../json/dates.json';

let textSubTitle = 'Общее количество';


//arrays of data: illness, deaths and recovers
let illness = [], deaths = [], recovers = [], illnessClear = [];

for (let item in ill) {
    illness.push(ill[item]);
}
for (let item in ill) {
    if (ill[item] == 0 || ill[item] == "") break;
    illnessClear.push(ill[item]);
};
for (let item in death) {
    deaths.push(death[item]);
};
for (let item in recover) {
    recovers.push(recover[item]);
};


//dynamic
let dynamicIllness = [], dynamicDeaths = [], dynamicRecovers =[];

for(let j = 0; j < illness.length-1; j++ ) {
    let delta;
    if( j<= (illness.length-2) && (illness[j+1] != 0)) { delta = illness[j+1] - illness[j]; };
    dynamicIllness.push(delta);
};

function dynamicFunc(com, dyn) {
    for(let j = 0; j < com.length-1; j++ ) {
        let delta;
        if( j<= (com.length-2) ) {delta = com[j+1] - com[j]; };
        dyn.push(delta);
    };
};

dynamicFunc(deaths, dynamicDeaths);
dynamicFunc(recovers, dynamicRecovers);


//display of prognosis
let prognosis1Check = document.querySelector('#prognosis1Check'),
    prognosis1Button = document.querySelector('#prognosis1Button'),
    modal = document.querySelector('.data__modal'),
    prognosis = "";

prognosis1Button.addEventListener('click', () => {
    if(prognosis1Check.checked) {
        prognosis = "";
        modal.style.display = "none";
        chartFunction(dates, illnessClear, deaths, recovers, textSubTitle, prognosis, prognosis);
    } else {
        if(allRadio.checked) all.click();
        modal.style.display = "flex";
        chartFunction(dates, illness, deaths, recovers, textSubTitle, prognosis1, prognosis2, prognosis3Author);
    }
});


// Set up the chart
function chartFunction(dates, illnessData, deaths, recovers, textSubTitle, prognosisA, prognosisB, prognosisC) {
    let chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            zoomType: "x",
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 70,
                viewDistance: 25
            }
        },
        credits: {
            text: "SDen4",
            href: "https://github.com/SDen4",
            style: {
                fontSize: "16px",
                color: "#A53E3E"
            }
        },
        colors: ['#D2691E', '#4B0082', '#008000', '#D3D3D3', '#C0C0C0', '#A9A9A9'],
        title: {
            text: 'Распространение короновируса в России',
            style: {
                color: "#A53E3E"
            }
        },
        subtitle: {
            text: textSubTitle,
            style: {
                color: "#A53E3E"
            }
        },
        tooltip: {
            shared: true
        },
        yAxis: {
            title: {
                text: "Кол-во человек"
            }
        },
        xAxis: {
            categories: dates
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            name: "Заболело",
            data: illnessData
        },{
            name: "Умерло",
            data: deaths
        },{
            name: "Выздоровело",
            data: recovers
        },{
            name: "Прогноз 1",
            data: prognosisA
        },{
            name: "Прогноз 2",
            data: prognosisB
        },{
            name: "Прогноз 3",
            data: prognosisC
        }],
    });
};

chartFunction(dates, illnessClear, deaths, recovers, textSubTitle, prognosis);


//dynamic button
const allRadio = document.querySelector("#allRadio");
const all = document.querySelector("#all");
all.textContent = "Общий прирост";

all.addEventListener('click', () => {
    if(allRadio.checked) {
        all.textContent = "Общий прирост";
        textSubTitle = 'Общее количество'
        chartFunction(dates, illnessClear, deaths, recovers, textSubTitle, prognosis);
    } else {
        if(prognosis1Check.checked) prognosis1Button.click();
        all.textContent = "Динамика прироста";
        textSubTitle = 'Динамика новых случаев'
        chartFunction(dates, dynamicIllness, dynamicDeaths, dynamicRecovers, textSubTitle, prognosis);
    }
});

export {illness, deaths, recovers};