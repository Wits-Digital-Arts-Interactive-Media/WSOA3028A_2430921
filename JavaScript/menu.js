//Pages Index Code
const root = "/WSOA3028A_2430921"

const menuItems =
    [
        { name: "Home", href: `${root}/index.html` },
        { name: "Blog", href: `${root}/Blog/blog.html` },
        { name: "Essays", href: `${root}/Essays/essays.html` },
        { name: "Portfolio", href: `${root}/Portfolio/portfolio.html` },
        { name: "Design", href: `${root}/Designs/designs.html` },
        { name: "About", href: `${root}/About/about.html` },
    ]

const otherPages =
    [
        { name: "blogs" },
        { name: "pictures" },
        { name: "essay"}
    ]

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
           
        } else (li.innerText = menuItem.name)
        ul.appendChild(li)

        
    }
    nav.appendChild(ul)

}