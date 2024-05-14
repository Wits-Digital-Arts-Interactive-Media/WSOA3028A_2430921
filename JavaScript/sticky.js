

    //var header = document.getElementById('menu');
var header = document.querySelector('nav');
window.addEventListener("scroll", function () {
    
    
    //console.log(offSet);
    console.log('Y:' + scrollY);
    console.log('Top:' + document.documentElement.scrollTop)
    if (window.scrollY > 0) {
        console.log("scroll");
        header.classList.add("sticky");
    } else {
        console.log("stop");
        header.classList.remove("sticky");
    }
})