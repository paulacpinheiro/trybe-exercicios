// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const link = (event) => {
    event.preventDefault()
}

hrefLink.addEventListener('click', (link))

const checkbox = (event) => {
    event.preventDefault()
}
inputCheckbox.addEventListener('click', (checkbox))

const text = (event) => {
    const caracter = event.key;
    if (caracter !== 'a') {
        event.preventDefault()
    }
   
}
inputText.addEventListener('keypress', (text)) 