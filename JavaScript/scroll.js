

function ScrollUp() {
    window.scrollTo(0, 0);
}

export function initialise() {



    const button = document.createElement('button')
    button.textContent = 'To Top'
    document.body.appendChild(newBubuttontton)

    button.addEventListener('click', ScrollUp);
}