//Loading Images Test

const root = "/WSOA3028A_2430921/Portfolio"

/*const portfolioItems =
    [
        { name: "Animals", href: `Animals/portfolio.html`},
        { name: "Architecture", href: `Architecture/portfolio.html` },
        { name: "Landscapes", href: `Landscapes/portfolio.html` },
        { name: "Moon", href: `Moon/portfolio.html` },
        { name: "Nature", href: `Nature/portfolio.html` },
        { name: "Portraits", href: `Portraits/portfolio.html` },
        { name: "Sun", href: `Sun/portfolio.html` },
    ];*/
const portfolioItems =
    [
        { name: "Animals", href: `Animals/portfolio.html` },
        { name: "Architecture", href: `Architecture/portfolio.html` },
        { name: "Landscapes", href: `Landscapes/portfolio.html` },
        { name: "Moon", href: `Moon/portfolio.html` },
        { name: "Nature", href: `Nature/portfolio.html` },
        { name: "Portraits", href: `Portraits/portfolio.html` },
        { name: "Sun", href: `Sun/portfolio.html` },
    ];
const portfolioPictures =
    [
        { name: "Animals", href: `Pictures/Animals.jpg` },
        { name: "Architecture", href: `Pictures/Architecture.jpg` },
        { name: "Landscapes", href: `Pictures/Landscapes.jpg` },
        { name: "Moon", href: `Pictures/Moon.jpg` },
        { name: "Nature", href: `Pictures/Nature.jpg` },
        { name: "Portraits", href: `Pictures/Portraits.jpg` },
        { name: "Sun", href: `Pictures/Sun.jpg` },
    ];



export function initialise(numOfPics) {

    const canvas = [
        document.createElement('canvas'),
    ]

    for (var i = 1; i <= numOfPics; i++) {
        canvas[i - 1].src = (portfolioPictures[i - 1].href)
        canvas[i - 1].width = 350
        canvas[i - 1].height = 350
        var ctx = canvas[i - 1].getContext('2d')
        ctx.drawImage(portfolioPictures[i - 1].href, 0, 0)
        //ctx.font = '50px Times '
        ctx.fillText(canvas[i - 1].name, 0, 0)
        document.body.appendChild(canvas[i - 1])
    }

    /*
    const img = [
        document.createElement('img'),
    ]


    for (var i = 1; i <= numOfPics; i++) {

            

            img[i - 1].src = (portfolioPictures[i-1].href)

            /*img[i - 1].width = img[i - 1].naturalWidth / 8
            img[i - 1].height = img[i - 1].naturalHeight / 8


            img[i - 1].width = 350
            img[i - 1].height = 350
            img[i-1].setAttribute("value",i-1)
            document.body.appendChild(img[i - 1])


            img.push(document.createElement('img'))
            img[i - 1].onclick = function () {
                window.location.href = portfolioItems[this.getAttribute("value")].href;
                console.log(this.getAttribute("value"));

 
        };

        img[i - 1].onmouseenter = function (event) {
                //console.log( this.width + " " + this.height)
                this.width = this.width + 50 
                this.height = this.height + 50
        };

        img[i - 1].onmouseleave = function (event) {
                //console.log( this.width + " " + this.height)
                this.width = this.width - 50
                this.height = this.height - 50
        };


    }

*/

}
