//WEEKLY CHART
var lineChart = document.getElementById("lineChart-weekly");
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
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//HOURLY CHART
var lineChart = document.getElementById("lineChart-hourly");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["00-01", "02-05", "06-09", "10-12", "13-15", "16-18", "19-21", "22-23"],
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
            data: [0, 5, 9, 12, 8, 17, 7, 15]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//DAILY CHART
var lineChart = document.getElementById("lineChart-daily");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["1","2", "3", "4", "5", "6", "7", "8"],
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
            data: [62, 55, 135, 212, 247, 298, 125, 57]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//MONTHLY CHART
var lineChart = document.getElementById("lineChart-monthly");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
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
            data: [1350, 1900, 2320, 2720, 3150, 3345, 3553, 4120]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
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




