

    var header = document.getElementById('menu');
    window.addEventListener("scroll", function() {
    
    var offSet = header.offsetTop;
    //console.log(offSet);
    console.log('Y:' + scrollY);
    console.log('Top:' + document.documentElement.scrollTop)
    var currentdate = new Date();
    console.log(currentdate.getSeconds());
    if (window.scrollY > 0) {
        console.log("scroll");
        header.classList.add("sticky");
    } else {
        console.log("stop");
        header.classList.remove("sticky");
    }
})