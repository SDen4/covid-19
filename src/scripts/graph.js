import ill from "../json/ill.json";
import death from "../json/dead.json";
import recover from "../json/recover.json";
import dates from "../json/dates.json";

import prognosis1 from "./prognosis1";
import prognosis2 from "./prognosis2";
import prognosis3Author from "./prognosis3";

let textSubTitle = 'Общее количество';
let typeOfChart = 'area';
let opt3d = false;

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
        typeOfChart = 'area';
        opt3d = false;
        textSubTitle = 'Общее количество';
        chartFunction(typeOfChart, opt3d, dates, illnessClear, deaths, recovers, nowIll, textSubTitle, prognosis, prognosis);
    } else {
        if(allRadio.checked) all.click();
        modal.style.display = "flex";
        typeOfChart = 'column';
        opt3d = true;
        textSubTitle = 'Прогнозы';
        chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, nowIll, textSubTitle, prognosis1, prognosis2, prognosis3Author);
    }
});


// Set up the chart
function chartFunction(typeOfChart, opt3d, dates, illnessData, deaths, recovers, nowIll, textSubTitle, prognosisA, prognosisB, prognosisC) {
    let chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: typeOfChart,
            // type: 'area',
            zoomType: "x",
            options3d: {
                enabled: opt3d,
                // enabled: false,
                alpha: 0,
                beta: 0,
                depth: 70,
                viewDistance: 25
            }
        },
        plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                lineWidth: 1,
                lineColor: '#666666'
              }
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
        colors: ['#D2691E', '#6495ED', '#228B22', '#4B0082', '#D3D3D3', '#C0C0C0', '#A9A9A9'],
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
            name: "Сейчас болеет",
            data: nowIll
        },{
            name: "Выздоровело",
            data: recovers
        },{
            name: "Умерло",
            data: deaths
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

chartFunction(typeOfChart, opt3d, dates, illnessClear, deaths, recovers, nowIll, textSubTitle, prognosis);


//dynamic button
const allRadio = document.querySelector("#allRadio");
const all = document.querySelector("#all");
all.textContent = "Общий прирост";

all.addEventListener('click', () => {
    let now;
    if(allRadio.checked) {
        all.textContent = "Общий прирост";
        textSubTitle = 'Общее количество';
        now = nowIll;
        chartFunction(typeOfChart, opt3d, dates, illnessClear, deaths, recovers, now, textSubTitle, prognosis);
    } else {
        if(prognosis1Check.checked) prognosis1Button.click();
        all.textContent = "Динамика прироста";
        textSubTitle = 'Динамика новых случаев';
        now = "";
        chartFunction(typeOfChart, opt3d, dates, dynamicIllness, dynamicDeaths, dynamicRecovers, now, textSubTitle, prognosis);
    }
});

export {illness, deaths, recovers, nowIll};