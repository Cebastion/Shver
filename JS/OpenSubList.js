$(document).ready(function(){
    $('.open').click(function(e){
        $('.menu__language').toggleClass('active');
        $('.menu__coloum-row').toggleClass('active');
    });
    $('.burger-btn').click(function(e){
        $('.menu__coloum-row').removeClass('active');
        $('.menu__language').removeClass('active');
    });
});