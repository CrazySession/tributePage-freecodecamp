$(document).ready(function () {
  navHover();
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

// Get the header
    let header = document.getElementById("nav");

// Get the offset position of the navbar
    let sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
});

function navHover() {
    $('.nav-navbar-navButton').hover(function () {
        $(this).css("background-color", "#35A7FF");
        $(this).css("border-radius", "20px");
    },function () {
        $(this).css("background-color", "#194E93");
    })
};

