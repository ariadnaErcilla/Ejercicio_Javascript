$(document).ready(function(){

    //Javascript para cambiar la classe 'current-menu-item' de li
    $('.clearfix li').click(function (e){
        e.preventDefault();

        if($(this).hasClass('current-menu-item')){
            $(this).removeClass('current-menu-item');
        }

        else{
            $('.clearfix li').removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        }
    });

    // Hover para los elementos
    $(".clearfix li").hover(function() {
        $(this).children("ul").fadeIn('fast');
        },
        function(){
        $(this).children("ul").fadeOut('fast');
        });


    // Cambiar icono hamburguesa a cruz y mostrar menu mobil
    var contenidoMenu = $('#menu-container');
    var cruzMobil = $('#mobile-close');
    var botonMobil = $('#mobile-button');

    botonMobil.click(function() {
        contenidoMenu.show();
        cruzMobil.show();
        botonMobil.hide();
    });

    cruzMobil.click(function() {
        contenidoMenu.hide();
        cruzMobil.hide();
        botonMobil.show();
    });

});
