export function initialise() {
    //document.addEventListener("scroll", stickyScroll());
    window.onscroll = stickyScroll();
}

function stickyScroll() {
    var header = document.getElementById('menu');
    var offSet = header.offSetTop;
    console.log(offSet);

    if (window.pageYOffset > 10) {
        console.log("scroll");
        header.classList.add("sticky");
    } else {
        console.log("stop");
        header.classList.remove("sticky");
    }
}