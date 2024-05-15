



window.addEventListener("scroll", function () {
    
    var header = document.querySelector(".menu");
    //console.log(offSet);
    /*console.log('Y:' + scrollY);
    console.log('Top:' + document.documentElement.scrollTop)*/
    if (window.pageYOffset > header.offsetTop) {
        console.log("scroll");
        header.classList.add("sticky");
    } else {
        console.log("stop");
        header.classList.remove("sticky");
    }
})