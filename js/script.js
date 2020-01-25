// показ карты

$('.showMap').click(function () { 
    $('.footerMap-info').slideUp(600);
});

// order услуг

if ($(window).width() < 1000) {
    $('.service2 > div:first-child').addClass('order-2');
    $('.service2 > div:last-child').addClass('order-1');
}

// прокрутка

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-Number($('nav').height());
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#menu1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-Number($('nav').height());
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// AboutUs
if ($(window).width() < 800) {
    $('.offset-6').removeClass('col-md-6');
    $('.offset-6').addClass('col-12');
    $('.offset-6').removeClass('offset-6');
}

