//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfLPics, numOfPPics) {
    
    for (var i = 1; i <= numOfLPics; i++) {

        const img = document.createElement('img')
        img.src = (`Landscape/${folder} (${i}).jpg`)
        img.classList.add('display');
        document.body.appendChild(img);
    }
    for (var i = 1; i <= numOfPPics; i++) {

        const img = document.createElement('img')
        img.src = (`Portrait/${folder} (${i}).jpg`)
        img.classList.add('display');
        document.body.appendChild(img);
    }


}
