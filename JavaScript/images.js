//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfLPics, numOfPPics) {

    /*
    const img = [
        document.createElement('img'),
    ]*/

    const wideImg = [
        document.createElement('img'),
    ]
    const tallImg = [
        document.createElement('img'),
    ]

    var wideCount = 0
    var tallCount = 0
        /*
    img[0].src = (`Animals/Animals1.jpg`)
    img[0].width = 400
    img[0].height = 400
    document.body.appendChild(img[0])
    */
    
    for (var i = 1; i <= numOfLPics; i++) {

        const img = document.createElement('img')
        img.src = (`Landscape/${folder} (${i}).jpg`)
        document.body.appendChild(img);
    }
    for (var i = 1; i <= numOfPPics; i++) {

        const img = document.createElement('img')
        img.src = (`Portrait/${folder} (${i}).jpg`)
        document.body.appendChild(img);
    }


}
