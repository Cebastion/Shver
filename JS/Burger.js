$(document).ready(function(){
    $('.burger-btn').click(function(e){
        $('.burger-btn').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('.menu__list').toggleClass('active');
    });
});