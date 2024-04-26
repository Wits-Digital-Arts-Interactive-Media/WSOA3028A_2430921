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
       
        img[i].src = (`${folder}/${folder}${i}.jpg`)
        img[i].width = img[i].naturalHeight/4
        img[i].height = img[i].naturalWidth/4
        document.body.appendChild(img[i])
        img.push(document.createElement('img'))
    }
    


}
