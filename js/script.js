// показ карты

$('.showMap').click(function () { 
    $('.footerMap-info').slideUp(600);
});

// order услуг

if ($(window).width() < 1000) {
    $('.service2 > div:first-child').addClass('order-2');
    $('.service2 > div:last-child').addClass('order-1');
}