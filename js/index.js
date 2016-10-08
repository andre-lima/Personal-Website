var nav = document.getElementById("nav");
var header = document.getElementById("header");
window.addEventListener("scroll", checkNavPosition);

nav.className = "scrolling";

function checkNavPosition() {
    var r = header.getBoundingClientRect();
    if (r.bottom <= 50) {
        nav.className = "fixed";
    } else {
        nav.className = "scrolling";
    }
}
