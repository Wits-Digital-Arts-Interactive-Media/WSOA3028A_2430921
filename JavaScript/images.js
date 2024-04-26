//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfPics) {

    const img = [
        document.createElement('img'),
    ]


    for (var i = 0; i < numOfPics; i++) {
        img[i].src = (`/WSOA3028A_2430921/Portfolio/Pictures/${folder}/${folder}${i}.jpg`)
        img[i].width = img[i].naturalHeight/4
        img[i].height = img[i].naturalWidth/4
        document.body.appendChild(img[i])
        img.push(document.createElement('img'))
    }
    // Append the img element to the document body or another element 

}
