/**
 * Created by Nicolas on 2017-07-07.
 */
$("#downArrow, #menuHowMantle").click(function() {
    $('.wsmenucontainer').removeClass('wsoffcanvasopener');
    $('html, body').animate({
        scrollTop: $("#howMantleWorks").offset().top
    }, 2000);
});
$("#menuWhyMantle").click(function() {
    $('.wsmenucontainer').toggleClass('wsoffcanvasopener');
    $('html, body').animate({
        scrollTop: $("#whyMantle").offset().top
    }, 2000);
});
$("#menuContact").click(function() {
    $('.wsmenucontainer').toggleClass('wsoffcanvasopener');
    $('html, body').animate({
        scrollTop: $("#contactUs").offset().top
    }, 2000);
});
$("#menuHome").click(function() {
    $('.wsmenucontainer').toggleClass('wsoffcanvasopener');
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});
