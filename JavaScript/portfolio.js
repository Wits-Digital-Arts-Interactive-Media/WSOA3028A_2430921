//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfPics) {

    const img = [
        document.createElement('img'),
    ]


    for (var i = 1; i <= numOfPics; i++) {

        img[i - 1].src = (`${folder}/${folder}${i}.jpg`)
        img[i - 1].width = img[i - 1].naturalWidth / 8
        img[i - 1].height = img[i - 1].naturalHeight / 8
        document.body.appendChild(img[i - 1])
        img.push(document.createElement('img'))
        img[i - 1].onclick = function (event) {
            window.location.href = this.id + 'Animals/portfolio.html';
        };
    }



}
