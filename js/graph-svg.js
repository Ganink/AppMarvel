let ar = [];
let arr = []
let x;
window.onload = function () {
    ar = JSON.parse(localStorage.getItem('datosCC'));
    if (ar == null) {
        ar = JSON.parse(localStorage.getItem('datosCC'));
        localStorage.setItem('datoCC', JSON.stringify(ar));
    }
    arr = JSON.parse(localStorage.getItem('datosCH'));
    if (arr == null) {
        arr = JSON.parse(localStorage.getItem('datosCH'));
        localStorage.setItem('datoCC', JSON.stringify(arr));
    }
    pointsCC();
    pointsCH();
}

google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVisualizationCC);

function drawVisualizationCC() {
    let d = ar;
    let CC = localStorage.getItem('datosCC');
    let CC_ = JSON.parse(CC);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Puntuación Comics');
    data.addColumn('number', '2018');
    $(d).each(function (i, element) {
        data.addRows([
            [CC_[i][0].nombre, CC_[i][0].votos]
        ])
    })
    var options = {
        title: 'PUNTUACION DE COMICS',
        hAxis: {
            title: 'VOTOS'
        },
        seriesType: 'bars',
        gradient: {
            color1: '#fbf6a7',
            color2: '#33b679',
            useObjectBoundingBoxUnits: true
        },
        series: {
            10: {
                type: 'line'
            }
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawVisualizationCH);

function drawVisualizationCH() {
    let d = arr;
    let CC = localStorage.getItem('datosCH');
    let CC_ = JSON.parse(CC);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Puntuación Personajes');
    data.addColumn('number', '2018');
    $(d).each(function (i, element) {
        data.addRows([
            [CC_[i][0].nombre, CC_[i][0].votos]
        ])
    })
    var options = {
        title: 'PUNTUACION DE PERSONAJES',
        hAxis: {
            title: 'VOTOS'
        },
        seriesType: 'bars',
        gradient: {
            color1: '#fbf6a7',
            color2: '#33b679',
            useObjectBoundingBoxUnits: true
        },
        series: {
            10: {
                type: 'line'
            }
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

function pointsCC() {
    let CC = localStorage.getItem('idComic');
    let CC_ = JSON.parse(CC)
    let dtCC = localStorage.getItem('datosCC');
    let dCC = JSON.parse(dtCC);
    console.log(CC_);
    $(ar).each(function (i, element) {
        if (CC_ == ar[i][0].id) {
            console.log(ar[i][0].id, ar[i][0].nombre);
            ar[i][0].votos++;
            localStorage.setItem('datosCC', JSON.stringify(ar));
        }
    })
}
function pointsCH() {
    let CC = localStorage.getItem('idCharacter');
    let CC_ = JSON.parse(CC)
    let dtCC = localStorage.getItem('datosCH');
    let dCC = JSON.parse(dtCC);
    console.log(CC_);
    $(arr).each(function (i, element) {
        if (CC_ == arr[i][0].id) {
            console.log(arr[i][0].id, arr[i][0].nombre);
            arr[i][0].votos++;
            localStorage.setItem('datosCH', JSON.stringify(arr));
        }
    })
}