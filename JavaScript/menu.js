// JavaScript source code
const root = "/WSOA3028A_2430921"

const menuItems =
    [
        { name: "Home", href: root + "index/html" },
        { name: "Blog", href: root + `${root}/Blogs/index.html` },
        { name: "Essays", href: root + `${root}/Essays/index.html` },
        { name: "Portfolio", href: root + `${root}/Portfolio/index.html` },
        { name: "Design", href: root + `${root}/Designs/index.html` },



    ];

export function initialize(currentPage) {
    var nav = document.querySelector("header > nav")
    var ul = document.createElement("ul")

    for (let menuItem of menuItems) {
        if (currentPage != menuItem.name) {
            var li = document.createElement("li")
            var a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }
    nav.appendChild(ul)
}