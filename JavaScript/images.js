//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"



export function initialise(folder, numOfPics) {

    const img = [
        document.createElement('img'),
    ]
        
        /*
    img[0].src = (`Animals/Animals1.jpg`)
    img[0].width = 400
    img[0].height = 400
    document.body.appendChild(img[0])
    */
    
    for (var i = 1; i <= numOfPics; i++) {
       
        img[i - 1].src = (`${folder}/${folder}${i}.jpg`)
        /*img[i - 1].width = 400
        img[i - 1].height = 400*/
        
        /*console.log("Originals: " + img[i - 1].naturalHeight + " " + img[i - 1].naturalWidth)
        console.log("Fake: " + img[i - 1].height + " " + img[i - 1].width)*/
        img[i-1].width = img[i-1].naturalHeight/4
        img[i-1].height = img[i-1].naturalWidth/4
        document.body.appendChild(img[i-1])
        img.push(document.createElement('img'))
    }
    


}
