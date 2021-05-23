window.onscroll = function() {

    var nav = document.getElementsByTagName('nav')[0];
    if (window.pageYOffset > 150) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}