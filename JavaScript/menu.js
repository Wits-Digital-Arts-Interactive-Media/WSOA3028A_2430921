// JavaScript source code
const root = "/WSOA3028A_2430921"

const menuItems =
    [
        { name: "Home", href: root + "index/html" },
        { name: "Blog", href: root + `${root}/Blogs/blog.html` },
        { name: "Essays", href: root + `${root}/Essays/index.html` },
        { name: "Portfolio", href: root + `${root}/Portfolio/portfolio.html` },
        { name: "Design", href: root + `${root}/Designs/designs.html` },



    ];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (let menuItem of menuItems) {
        if (currentPage != menuItem.name) {
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
            ul.appendChild(li)
        }
    }
    nav.appendChild(ul)
}