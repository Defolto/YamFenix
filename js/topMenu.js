$(window).scroll(function () { 
    if(window.pageYOffset == 0){
        $('nav').removeClass('navbarMini');
    }else{
        $('nav').addClass('navbarMini');
    }
});