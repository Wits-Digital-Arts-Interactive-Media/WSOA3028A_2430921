//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(numOfPics) {

    const img = [
        document.createElement('img'),
    ]
    const portfolioItems =
        [
            "Animals",
            "Architecture",
            "Landscapes",
            "Moon",
            "Nature",
            "Portraits",
            "Sun",
        ]

    for (var i = 1; i <= numOfPics; i++) {

        img[i - 1].src = (`Pictures/${portfolioItems[i - 1]}.jpg`)
            /*img[i - 1].width = img[i - 1].naturalWidth / 8
             = img[i - 1].naturalHeight / 8*/

        img[i - 1].width = 500
        img[i - 1].height = 500
        document.body.appendChild(img[i - 1])
        

        img.push(document.createElement('img'))
        img[i - 1].onclick = function (event) {
            window.location.href = `${portfolioItems[i-1]}/portfolio.html`;
        };
    }



}
