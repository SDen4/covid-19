// import {illness, deaths, recovers, illnessClear, nowIll} from "./statistic";
// import {illness, deaths, recovers, illnessClear, nowIll, dates} from "./getInfo";
// import dates from "./date";
import prognosis1 from "./prognosis1";
import prognosis2 from "./prognosis2";
import prognosis3Author from "./prognosis3";
import prognosis4Sber from "./prognosis4";
import {illness, deaths, recovers, nowIll, dates} from './getInfo';

setTimeout(() => {
    chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, nowIll, textSubTitle);
}, 900);

//type of graph and changed subtitle
let textSubTitle = 'Общее количество',
    typeOfChart = 'area',
    opt3d = false;

//display of prognosis
let prognosis1Check = document.querySelector('#prognosis1Check'),
    prognosis1Button = document.querySelector('#prognosis1Button'),
    modal = document.querySelector('.data__modal');

prognosis1Button.addEventListener('click', () => {
    if(prognosis1Check.checked) {
        modal.style.display = "none";
        typeOfChart = 'area';
        opt3d = false;
        textSubTitle = 'Общее количество';
        chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, nowIll, textSubTitle);
    } else {
        if(allRadio.checked) all.click();
        modal.style.display = "flex";
        typeOfChart = 'column';
        opt3d = true;
        textSubTitle = 'Прогнозы';
        chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, nowIll, textSubTitle, prognosis1, prognosis2, prognosis3Author, prognosis4Sber);
    }
});

// Set up the chart
function chartFunction(typeOfChart, opt3d, dates, illnessData, deaths, recovers, nowIll, textSubTitle, prognosisA, prognosisB, prognosisC, prognosisD) {
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
        colors: ['#D2691E', '#6495ED', '#228B22', '#4B0082', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080'],
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
        },{
            name: "Прогноз 4",
            data: prognosisD
        }],
    });
};

// chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, nowIll, textSubTitle);


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
        chartFunction(typeOfChart, opt3d, dates, illness, deaths, recovers, now, textSubTitle);
    } else {
        if(prognosis1Check.checked) prognosis1Button.click();
        all.textContent = "Динамика прироста";
        textSubTitle = 'Динамика новых случаев';
        now = "";
        chartFunction(typeOfChart, opt3d, dates, dynamicIllness, dynamicDeaths, dynamicRecovers, now, textSubTitle);
    }
});