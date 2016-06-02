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


//BAR CHART

var barChart = document.getElementById("barChart");
var myChart2 = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Visited',
                data: [75, 100, 175, 125, 225, 211, 42],
                backgroundColor: "rgba(96, 96, 205, 0.6)",
            },
            {
                label: 'Signed Up',
                data: [34, 72, 112, 90, 172, 152, 11],
                backgroundColor: "rgba(255, 181, 107, 0.6)",
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

//PIE CHART

var doughnutChart = document.getElementById("pieChart");
var myChart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop",
            "PC",
            "Apple"
        ],
        datasets: [{
            data: [62, 45, 16, 23, 22],
            backgroundColor: [
                "rgb(102, 255, 255)",
                "rgb(51, 251, 51)",
                "rgb(96, 96, 205)",
                "rgb(255, 51, 249)",
                "rgb(255, 160, 51)",
            ]
        }]
    }
});