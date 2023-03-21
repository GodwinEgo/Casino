setTimeout(function() {
    $(".loader_bg").fadeOut();
}, 1500);


//To Show The Navigation
function Show() {
    document.getElementById("nav-list").style.display = "block";
}
//To Hide The Navigation
function Hide() {
    document.getElementById("nav-list").style.display = "none";
}
/*================ SCROLL BUTTON =======================*/
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show')
    } else {
        btn.removeClass('show')
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '1000');
});