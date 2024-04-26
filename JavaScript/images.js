//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise() {

    const img = [
        document.createElement('img'),
    ]
    img.push(document.createElement('img'))
    // Set the src attribute to the URL of the image 
    img[0].src = ("WSOA3028A_2430921/Portfolio/Pictures/Landscape1.jpg")
    img[0].width = 300
    img[0].height = 100
    img[1].src = ("WSOA3028A_2430921/Portfolio/Pictures/Landscape2.jpg")
    img[1].width = 300
    img[1].height = 100
    // Append the img element to the document body or another element 
    document.body.appendChild(img[0]);
    document.body.appendChild(img[1]);
}