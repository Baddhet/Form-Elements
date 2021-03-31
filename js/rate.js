const buttonsStar = document.querySelectorAll('.rate-button__star')

buttonsStar.forEach((elem) => {
    elem.addEventListener('click', () => {
        let star = elem.nextElementSibling
        let arr = Array.prototype.slice.call(buttonsStar);
        for (let i = 0; i < arr.indexOf(elem) + 1; i++) {
            buttonsStar[i].nextElementSibling.textContent = 'star'
        }
        for (let i = buttonsStar.length - 1; i > arr.indexOf(elem); i--) {
            buttonsStar[i].nextElementSibling.textContent = 'star_border'
        }
    })
})