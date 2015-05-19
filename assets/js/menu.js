$(document).ready(function(){
    //Javascript para marcar el elemento del menú seleccionado
    var esteElemento = $(this);

    $('.clearfix li').click(function(evento){
        evento.preventDefault();
        if(esteElemento.hasClass('current-menu-item')){
            esteElemento.removeClass('current-menu-item');
        }
        else{
            $('.clearfix li').removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
            /*si elimino $(this) y pongo la variable 'esteElemento' ya no funciona la función.
            Sólo puedo usar la variable donde la he cambiado, en los otros sitios me peta sin sentido.
            Yo había puesto:
                else{
                $('.clearfix li').removeClass('current-menu-item');
                esteElemento.addClass('current-menu-item');
                }  */
        }
    });


});

//Javascript para el menú mobil
$(document).ready(function(){
    var contenidoMenu = $('#menu-container');
    var cruzMobil = $('#mobile-close');
    var botonMobil = $('#mobile-button');

        botonMobil.click(function() {
            contenidoMenu.show();
            cruzMobil.show();
            botonMobil.hide();
         });

        $('#mobile-close').click(function() {
            contenidoMenu.hide();
            cruzMobil.hide();
            botonMobil.show();
        });
    });



/*
    $('clearfix li').hover(function (evento) {
       $(this).fadeToggle('2000,swing');
   });



    $('clearfix li').hover(function () {
  if ($('li.current-menu-item').is(':visible')) {
    $('li').fadeOut('fast');
  } else {
    $('li').fadeIn('slow');
  };
});
*/





