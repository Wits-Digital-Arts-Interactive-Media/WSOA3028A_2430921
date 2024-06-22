// JavaScript source code

const portfolioPictures =
    [
        { name: "Animals", href: `Portfolio/Pictures/Animals.jpg` },
        { name: "Architecture", href: `Portfolio/Pictures/Architecture.jpg` },
        { name: "Landscapes", href: `Portfolio/Pictures/Landscapes.jpg` },
        { name: "Moon", href: `Portfolio/Pictures/Moon.jpg` },
        { name: "Nature", href: `Portfolio/Pictures/Nature.jpg` },
        { name: "Portraits", href: `Portfolio/Pictures/Portraits.jpg` },
        { name: "Sun", href: `Portfolio/Pictures/Sun.jpg` },
    ];

const displayPic = document.getElementById("display");

let x = 0;

export function initialise() {
    displayPic.src = (portfolioPictures[x].href);
    setInterval(updateImages(), 2000);
}



function updateImages() {
    x++;
    if (x >= 7) {
        x = 0;
    }
    displayPic.src = (portfolioPictures[x].href); 

}