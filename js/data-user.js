var user = [];
$(function () {
    let idComic = localStorage.getItem('idComic');
    let idCharacter = localStorage.getItem('idCharacter');
    console.log(idComic);
    $('#sbt').on('click', function () {
        let usr = $('input:text[name=nombre]').val();
        let apll = $('input:text[name=apellido]').val();
        let tlf = $('input[name=telefono]').val();
        let email = $('input[name=email]').val();

        let data = usr + ' ' + apll + ' ' + tlf + ' ' + email + ' VOTÓ POR COMIC CON ID: ' + JSON.parse(idComic);
        user.push(data);
        localStorage.setItem('Datos Usuario', JSON.stringify(user));
    })
})