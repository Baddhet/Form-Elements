const rateButtons = document.querySelectorAll('.rate-button');
const buttonsStar = document.querySelectorAll('.rate-button__star');

/*buttonsStar.forEach((elem) => {
    elem.addEventListener('click', () => {
        let arr = Array.prototype.slice.call(buttonsStar);
        for (let i = 0; i < arr.indexOf(elem) + 1; i++) {
            buttonsStar[i].nextElementSibling.textContent = 'star';
        }
        for (let i = buttonsStar.length - 1; i > arr.indexOf(elem); i--) {
            buttonsStar[i].nextElementSibling.textContent = 'star_border';
        }
    })
})*/

rateButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    buttonsStar.forEach((elem) => {
      console.log('rjkbxtcndj')
      elem.addEventListener('click', () => {
        let arr = Array.prototype.slice.call(buttonsStar);
        for (let i = 0; i < arr.indexOf(elem) + 1; i++) {
          buttonsStar[i].nextElementSibling.textContent = 'star';
        }
        for (let i = buttonsStar.length - 1; i > arr.indexOf(elem); i--) {
          buttonsStar[i].nextElementSibling.textContent = 'star_border';
        }
      });
    });
  });
});