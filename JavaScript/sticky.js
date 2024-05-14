export function initialise() {
    //document.addEventListener("scroll", stickyScroll());
    window.onscroll = stickyScroll();
}

function stickyScroll() {
    var header = document.getElementById('menu');
    var offSet = header.offsetTop;
    console.log(offSet);

    if (window.scrollY > 0) {
        console.log("scroll");
        header.classList.add("sticky");
    } else {
        console.log("stop");
        header.classList.remove("sticky");
    }
}