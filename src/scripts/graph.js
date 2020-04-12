import ill from "../json/ill.json";
import death from "../json/dead.json";
import recover from "../json/recover.json";

let textTitle = 'Динамика распространения короновируса в России';


//arrays of data: illness, deaths and recovers
let illness = [], deaths = [], recovers = [], dates = [];
for (let item in ill) {
    illness.push(ill[item]);
    dates.push(item); //dates for x-axis
}
for (let item in death) {
    deaths.push(death[item]);
};
for (let item in recover) {
    recovers.push(recover[item]);
};




//detailes data
let dynamicIllness = [], dynamicDeaths = [], dynamicRecovers =[];

for(let j = 0; j < illness.length-1; j++ ) {
     let delta;
    if( j<= (illness.length-2) ) {delta = illness[j+1] - illness[j]; };
    dynamicIllness.push(delta);
};

for(let j = 0; j < deaths.length-1; j++ ) {
     let delta;
    if( j<= (deaths.length-2) ) {delta = deaths[j+1] - deaths[j]; };
    dynamicDeaths.push(delta);
};

for(let j = 0; j < recovers.length-1; j++ ) {
     let delta;
    if( j<= (recovers.length-2) ) {delta = recovers[j+1] - recovers[j]; };
    dynamicRecovers.push(delta);
};







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
        text: "SDen4",
        href: "https://github.com/SDen4",
        style: {
            fontSize: "16px",
            color: "#A53E3E"
        }

    },
    colors: ['#D2691E', '#4B0082', '#008000'],
    title: {
        text: textTitle
    },
    yAxis: {
        title: {
            text: "Кол-во человек"
        }
    },
    xAxis: {
        categories: dates
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


//dynamic button
const allRadio = document.querySelector("#allRadio");
const all = document.querySelector("#all");

all.textContent = "Общий прирост";
chart.series.data  = illness;

all.addEventListener('click', () => {
    if(allRadio.checked) {
        all.textContent = "Общий прирост";
        chart.series.data  = illness;
        console.log(chart.series.data );
    } else {
        all.textContent = "Динамика прироста";
        chart.series.data  = dynamicIllness;
        console.log(chart.series.data );
    }
});




export {illness, deaths, recovers};