//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfLPics, numOfPPics) {

    var count = 0;
    var total = numOfLPics + numOfPPics;
    const div = document.createElement('div');
    div.id = 'gallery';
    div.classList.add('gallery');
    for (var i = 1; i <= numOfLPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subdiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;      
        label.classList.add('numberIndex');
        subdiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Landscape/${folder} (${i}).jpg`);
        subDiv.appendChild(img);
        img.classList.add('display');
        img.classList.add('landscape');
        img.onclick = openModal(), currentSlide(count);
        div.appendChild(subDiv);
        document.body.appendChild(img);
    }
    for (var i = 1; i <= numOfPPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subdiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;
        label.classList.add('numberIndex');
        subdiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Portrait/${folder} (${i}).jpg`);
        subDiv.appendChild(img);
        img.classList.add('display');
        img.classList.add('portrait');
        img.onclick = openModal(), currentSlide(count);
        div.appendChild(subDiv);
        document.body.appendChild(img);
    }
    var a1 = document.createElement('a');
    a1.classList.add('prev');
    var a2 = document.createElement('a');
    a2.classList.add('next');
    div.appendChild(a1);
    div.appendChild(a2);
    document.body.appendChild(div);
}
function openModal() {
    document.getElementById("gallery").style.display = "block";
}

function closeModal() {
    document.getElementById("gallery").style.display = "none";
}

var slideIndex = 1;
/*showSlides(slideIndex);*/

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
