// LINE CHART

var lineChart = document.getElementById("lineChart");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderColor: "#6E75DA",
            pointBorderColor: '#545475',
            pointBackgroundColor: '#F6F7FF',
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            data: [500, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});