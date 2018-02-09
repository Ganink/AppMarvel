let dataCharacters;
//preloader bootstrap

$.ajax({
    type: 'GET',
    url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=d61d3104833f6f1d396fb69e8078d9cd',
    success: function (dataCH) {
        dataCharacters = dataCH;
        localStorage.setItem('dataCharacter', JSON.stringify(dataCharacters));
    },
    async: false,
    error: function (request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' log: ' + errorMessage);
    }
});

$('#characters').on('click', function () {
    allCharacters();
})

function allCharacters() {
    $('.row').empty();
    count = 0;
    let dt = dataCharacters.data.results;
    dt.forEach(element => {
        let li = element.thumbnail.path;
        li = li + '.jpg';
        let c = 'c' + count
        ct2 = 'ct' + count;
        let comic = 'comic' + count
        let col = 'col' + count;
        let collapse = 'collapse' + count;
        let well = 'well' + count;
        $('.row').append(`<div class="col-lg-4 col-sm-6 portfolio-item ${c} ctm">`);
        $(`.c` + count).append(`<div class="card h-100 ${ct2}">`);
        $(`.ct` + count).append('<a href="register.html" >');
        $(`.ct` + count).find('a').append(`<img src="${li}" alt="${element.name}" class="card-img-top"/>`);
        $('.ct' + count).append(`<div class="card-body ${comic}">`);
        $('.comic' + count).append(`<a href="register.html">${element.name}</a><br/>`);
        $('.comic' + count).append(`<button class="btn btn-outline-danger ${col}" type="button" data-toggle="collapse" data-target="#${collapse}" aria-expanded="false"
            aria-controls="collapseExample">Descripción</button>`);
        $('.comic' + count).append(`<a class="btn btn-outline-success voto" href="register.html" id="${element.id}">Votar</a>`);
        $('.comic' + count).append(`<div class="${collapse} collapse" id="${collapse}">`)
        $('.collapse' + count).append(`<div class="${well}">`)
        $('.well' + count).append(`<p class="card-text">${element.description}</p>`);
        count++;
        $('.btActive').text('TODOS');
    });
    paginate({
        itemSelector: '.ctm',
        paginationSelector: '#pagination-1',
        itemsPerPage: 6
    });
}

function paginate(options) {
    var items = $(options.itemSelector);
    var numItems = items.length;
    var perPage = options.itemsPerPage;
    items.slice(perPage).hide();
    $(options.paginationSelector).pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "dark-theme",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
            return false;
        }
    });
}

/**
 * in this method load all elements
 */
$('#all').on('click', function () {
    $('.row').empty();
    spinning();
    allCharacters();
});

/**
 * in this method load elements whit image 
 */
$('#cimg').on('click', function () {
    $('.row').empty();
    spinning();
    let dt = dataCharacters.data.results;
    dt.forEach(element => {
        let li = element.thumbnail.path;
        li = li + '.jpg';
        if (li.indexOf('image_not_available') == -1) {
            let c = 'c' + count
            ct2 = 'ct' + count;
            let comic = 'comic' + count
            let col = 'col' + count;
            let collapse = 'collapse' + count;
            let well = 'well' + count;
            $('.row').append(`<div class="col-lg-4 col-sm-6 portfolio-item ${c}">`);
            $(`.c` + count).append(`<div class="card h-100 ${ct2}">`);
            $(`.ct` + count).append('<a href="register.html" >');
            $(`.ct` + count).find('a').append(`<img src="${li}" alt="${element.name}" class="card-img-top"/>`);
            $('.ct' + count).append(`<div class="card-body ${comic}">`);
            $('.comic' + count).append(`<a href="register.html">${element.name}</a><br/>`);
            $('.comic' + count).append(`<button class="btn btn-outline-danger ${col}" type="button" data-toggle="collapse" data-target="#${collapse}" aria-expanded="false"
                aria-controls="collapseExample">Descripción</button>`);
            $('.comic' + count).append(`<a class="btn btn-outline-success voto" href="register.html" id="${element.id}">Votar</a>`);
            $('.comic' + count).append(`<div class="${collapse} collapse" id="${collapse}">`)
            $('.collapse' + count).append(`<div class="${well}">`)
            $('.well' + count).append(`<p class="card-text">${element.description}</p>`);
            count++;
        }
    });
    count = 0;
    $('.btActive').text('CON IMAGEN');
})

/**
 * in this method load elements whit not image 
 */
$('#nimg').on('click', function () {
    $('.row').empty();
    spinning();
    let dt = dataCharacters.data.results;
    dt.forEach(element => {
        let li = element.thumbnail.path;
        li = li + '.jpg';
        if (li.indexOf('image_not_available') !== -1) {
            let c = 'c' + count
            ct2 = 'ct' + count;
            let comic = 'comic' + count
            let col = 'col' + count;
            let collapse = 'collapse' + count;
            let well = 'well' + count;
            $('.row').append(`<div class="col-lg-4 col-sm-6 portfolio-item ${c}">`);
            $(`.c` + count).append(`<div class="card h-100 ${ct2}">`);
            $(`.ct` + count).append('<a href="register.html" >');
            $(`.ct` + count).find('a').append(`<img src="${li}" alt="${element.name}" class="card-img-top"/>`);
            $('.ct' + count).append(`<div class="card-body ${comic}">`);
            $('.comic' + count).append(`<a href="register.html">${element.name}</a><br/>`);
            $('.comic' + count).append(`<button class="btn btn-outline-danger ${col}" type="button" data-toggle="collapse" data-target="#${collapse}" aria-expanded="false"
                aria-controls="collapseExample">Descripción</button>`);
            $('.comic' + count).append(`<a class="btn btn-outline-success voto" href="register.html" id="${element.id}">Votar</a>`);
            $('.comic' + count).append(`<div class="${collapse} collapse" id="${collapse}">`)
            $('.collapse' + count).append(`<div class="${well}">`)
            $('.well' + count).append(`<p class="card-text">${element.description}</p>`);
            count++;
        }
    });
    count = 0;
    $('.btActive').text('SIN IMAGEN');
})

$('.voto').on('click', function () {
    let id = $(this).attr('id');
    console.log(id);
    localStorage.setItem('idCharacter', JSON.stringify(id));
});

function spinning() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
}