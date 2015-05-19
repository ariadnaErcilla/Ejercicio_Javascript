/*PARA CAMBIAR EL LI DEL COLOR*/
$(document).ready(function(){
        $('clearfix li").click(function(e){
e.preventDefault(),
if ($('this').hasClass('current-menu-item')) {
    $('this').removeClass('current-menu-item');
}
else {
    $('.clearfix li').removeClass('current-menu-item');
    $(this).addClass('current-menu-item');
}
}

/*para los hovers*/
/*$(document).ready(function(){
  $("li").hover(function(){
    $(".sub-menu").fadeToggle("slow, swing");
  });
});*/

/*
$('.funciona').hover(function(){
if ($(this).hasClass('sub-menu')) {
$(this).removeClass('sub-menu');
$(this).next().slideUp();
} else {
$('.funciona').removeClass('.sub-menu');
$(this).addClass('.sub-menu');
$('funciona').slideUp();
$(this).next().slideDown();
}
});
*/
/*PARA ABRIR Y CERRAR LA HAMBURGUESA*/
$(document).ready(function(){
        $("#mobile-button").click(function() {
            $('#menu-container').show();
            $('#mobile-close').show();
            $('#mobile-button').hide();
         });

        $("#mobile-close").click(function() {
            $('#menu-container').hide();
            $('#mobile-close').hide();
            $('#mobile-button').show();
        });
    });


/*MENU HOVER*/

$(document).ready(function(){
  var desplegable = $('clearfix.li');
       $('li').hover(function () {
     $(this).find('ul').fadeToggle('slow');
    });
    desplegable(function () {
      $(this).find('ul').fadeToggle(1000);
    });
 });


/*
$(document).ready(function(){
  $("li").click(function ()
    if ($('li').hasClass('current-menu-item')) {
      $('li').removeClass('current-menu-item');
    }
    else {
      $('li').addClass('current-menu-item');
    }
*/


//este es el bueno
$('li').hover(function (evento) {
        evento.preventDefault();
       $(this).next('ul').fadeToggle('3000');
   });
