

function ScrollUp() {
    window.scrollTo(0, 0);
}

export function initialise() {


    document.body.appendChild(document.createElement('br'))
    const button = document.createElement('button')
    button.textContent = 'To Top'
    document.body.appendChild(button)

    button.addEventListener('click', ScrollUp);
}