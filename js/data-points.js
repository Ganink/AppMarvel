$(function(){
    let dtComic = localStorage.getItem('datacomic');
    let dtCharacter = localStorage.getItem('dataCharacter');
    let datosComic = JSON.parse(dtComic);
    let datosCharacter = JSON.parse(dtCharacter);
    let CC = datosComic.data.results;
    let CH = datosCharacter.data.results;
    let resultsCC = [];
    let resultsCH = []
    CC.forEach(element => {
        var datosCC = [{
            id: element.id,
            nombre: element.title,
            votos: 1
        }]
        resultsCC.push(datosCC);
        localStorage.setItem('datosCC', JSON.stringify(resultsCC))
    });

    CH.forEach(element => {
        var datosCH = [{
            id: element.id,
            nombre: element.name,
            votos: 1
        }]
        resultsCH.push(datosCH)
        localStorage.setItem('datosCH', JSON.stringify(resultsCH))
    })

})