import ill from "../json/ill.json"
import death from "../json/dead.json"
import recover from "../json/recover.json"


let illness = [];
let deaths = [];
let recovers = [];

for (let item in ill) {
    illness.push(ill[item]);
}
for (let item in death) {
    deaths.push(death[item]);
}
for (let item in recover) {
    recovers.push(recover[item]);
}





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