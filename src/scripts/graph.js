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
        text: 'тест тест тест'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        name: "Заболело",
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    },{
        name: "Умерло",
        data: [9.9, 1.5, 6.4, 9.2, 4.0, 6.0, 5.6, 1.5, 2.4, 1.1, 9.6, 5.4]
    },{
        name: "Выздоровело",
        data: [9.9, 7.5, 10.4, 12.2, 14.0, 17.0, 13.6, 14.5, 21.4, 19.1, 9.6, 5.4]
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