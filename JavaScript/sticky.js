export function initialise() {
    document.addEventListener("scroll",stickyScroll());
}

function stickyScroll() {
    var header = document.querySelector(".menu");
    var offSet = header.offSetTop;
    console.log(offSet);

    if (window.screenY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}