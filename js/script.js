$(function () {
    $('.question__button').click(function () {
        $(this).parent('.question').toggleClass('active')
    });
});