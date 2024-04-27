//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfPics) {

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
    
    for (var i = 1; i <= numOfPics; i++) {

        const img = document.createElement('img')
        img.src = (`${folder}${i}.jpg`)
        if (img.naturalWidth < img.naturalHeight) {

            tallImg[tallCount].src = (`${folder}${i}.jpg`)
            tallImg[tallCount].onload = function () {
                tallImg[tallCount].width = tallImg[tallCount].naturalWidth / 12
                tallImg[tallCount].height = tallImg[tallCount].naturalHeight / 12
            }

            document.body.appendChild(tallImg[tallCount])
            tallCount++
            tallImg.push(document.createElement('img'))
        } else {

            wideImg[wideCount].src = (`${folder}${i}.jpg`)
            wideImg[wideCount].onload = function () {
                wideImg[wideCount].width = wideImg[wideCount].naturalWidth / 12
                wideImg[wideCount].height = wideImg[wideCount].naturalHeight / 12
            }
            document.body.appendChild(wideImg[wideCount])
            wideCount++
            wideImg.push(document.createElement('img'))
        }
        /*img[i - 1].src = (`${folder}${i}.jpg`)

        img[i-1].width = img[i-1].naturalWidth/12
        img[i-1].height = img[i-1].naturalHeight/12
        document.body.appendChild(img[i-1])
        img.push(document.createElement('img'))*/
    }
    


}
