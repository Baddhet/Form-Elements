let buttonsStar = document.querySelectorAll('.rate-button__star');
let iconsStar = document.querySelectorAll('.rate-button > label > .material-icons');

for (const buttonStar of buttonsStar) {
    buttonStar.onclick = function () {
        for (let element = 0; element < buttonsStar.length; element++) {
            iconsStar[element].textContent = 'star'; 
        }
        /*for (const iconStar of iconsStar) {
            console.log(iconStar.);
            /*if (buttonStar = iconStar) {
                iconStar.textContent = 'star';
            }*/
        /*if () {
            console.log(iconStar)
            //iconStar.textContent = 'star';
        }*/
        //iconsStar.textContent = 'star';
    }
}

for (let element = 0; element < buttonsStar.length; element++) {
    iconsStar[element].textContent = 'star'; 
}


/*function myRate(idStar) {
    var x = document.querySelector('.star4');
    console.log(idStar)
    x.innerHTML = "star";
    
}
let starBorder = document.querySelector('.rate-button__star:checked + label > i');*/