import ill from "../json/ill.json"
import death from "../json/dead.json"
import recover from "../json/recover.json"


//arrays of data illness, deaths and recovers
let illness = [], deaths = [], recovers = [];
for (let item in ill) {
    illness.push(ill[item]);
}
for (let item in death) {
    deaths.push(death[item]);
}
for (let item in recover) {
    recovers.push(recover[item]);
}


// the total data of the day
let lastIll = illness[illness.length-1];
let lastDeath = deaths[deaths.length-1];
let lastRecover = recovers[recovers.length-1];


//diaplay the total data of the day
const lastIllDisplay = document.querySelector(".data__display_ill");
const lastDeathDisplay = document.querySelector(".data__display_dead");
const lastRecoverDisplay = document.querySelector(".data__display_recover");
lastIllDisplay.textContent = lastIll;
lastDeathDisplay.textContent = lastDeath;
lastRecoverDisplay.textContent = lastRecover;


// the current data of the day
let curIll = illness[illness.length-1] - illness[illness.length-2];
let curDeath = deaths[deaths.length-1] - deaths[deaths.length-2];
let curRecover = recovers[recovers.length-1] - recovers[recovers.length-2];


//diaplay the current data of the day
const curIllDisplay = document.querySelector(".data__common__ill");
const curDeathDisplay = document.querySelector(".data__common__dead");
const curRecoverDisplay = document.querySelector(".data__common__recover");
curIllDisplay.textContent = curIll;
curDeathDisplay.textContent = curDeath;
curRecoverDisplay.textContent = curRecover;


// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        zoomType: "x",
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    credits: {
        enabled: false
    },
    colors: ['#D2691E', '#4B0082', '#008000'],
    title: {
        text: 'Динамика распространения короновируса в России'
    },
    yAxis: {
        title: {
            text: "Кол-во человек"
        }
    },
    xAxis: {
        title: {
            text: "Время"
        }
    },
    subtitle: {
        text: 'Источники инофрмации: WHO, Яндекс'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        name: "Заболело",
        data: illness
    },{
        name: "Умерло",
        data: deaths
    },{
        name: "Выздоровело",
        data: recovers
    }],
    
});

function showValues() {
    $('#alpha-value').html(chart.options.chart.options3d.alpha);
    $('#beta-value').html(chart.options.chart.options3d.beta);
    $('#depth-value').html(chart.options.chart.options3d.depth);
}

// Activate the sliders
$('#sliders input').on('input change', function () {
    chart.options.chart.options3d[this.id] = parseFloat(this.value);
    showValues();
    chart.redraw(false);
});

showValues();