// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// Side menu functionality
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}

//* Initialize ScrollReveal
// document.addEventListener('DOMContentLoaded', function () {
//    ScrollReveal().reveal('.scroll-reveal', {
//        delay: 200,
//        duration: 1006,
//        distance: '80px',
//        origin: 'bottom',
//        easing: 'cubic-bezier(0.5, 0, 0, 0.5)',
//        opacity: 0,
//        scale: 1,
//        reset: true,
//        mobile: true
//    });
// });


