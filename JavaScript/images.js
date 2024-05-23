//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfLPics, numOfPPics) {
    const images = [
        document.createElement('img'),
    ]
    var count = 0;
    var total = numOfLPics + numOfPPics;
    const div = document.createElement('div');
    div.id = 'gallery';
    div.classList.add('gallery');
    for (var i = 1; i <= numOfLPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subDiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;      
        label.classList.add('numberIndex');
        subDiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Landscape/${folder} (${i}).jpg`);
        images[count - 1].src = (`Landscape/${folder} (${i}).jpg`);
        images.push(document.createElement('img'),)
        subDiv.appendChild(img);
        img.style.width = "100%";
        images[count - 1].classList.add('display');
        images[count - 1].classList.add('portrait');     
        div.appendChild(subDiv);
        document.body.appendChild(images[count - 1]);
    }
    for (var i = 1; i <= numOfPPics; i++) {
        count++;
        const subDiv = document.createElement('div');
        subDiv.classList.add('slides');
        const label = document.createElement('div');
        label.innerHTML = `${count} / ${total}`;
        label.classList.add('numberIndex');
        subDiv.appendChild(label);
        const img = document.createElement('img');       
        img.src = (`Portrait/${folder} (${i}).jpg`);
        images[count - 1].src = (`Portrait/${folder} (${i}).jpg`);
        images.push(document.createElement('img'),)
        subDiv.appendChild(img);
        img.style.width = "100%";
        /*img.classList.add('display');
        img.classList.add('portrait');*/
        images[count - 1].classList.add('display');
        images[count - 1].classList.add('portrait');
        div.appendChild(subDiv);
        document.body.appendChild(images[count - 1]);
    }
    var a1 = document.createElement('a');
    a1.classList.add('prev');
    
    var a2 = document.createElement('a');
    a2.classList.add('next');
    
    div.appendChild(a1);
    div.appendChild(a2);
    document.body.appendChild(div);
    a1.onclick = plusSlides(-1);
    a2.onclick = plusSlides(1);
    for (var i = 0; i < count; i++) {
        images[i].onclick = openModal(), currentSlide(i+1);
    }
}
function openModal() {
    document.getElementById('gallery').style.display = "block";
}

function closeModal() {
    document.getElementById('gallery').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

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
    

}
