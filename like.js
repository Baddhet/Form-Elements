let like = document.querySelector('.like-button__heart');
let likesNumber = document.querySelector('.likes-number');

like.onclick = function () {
    if(like.classList.contains('like_added')) {
        likesNumber.textContent--;
    }
    else {
        likesNumber.textContent++;
    }
    like.classList.toggle('like_added');
    likesNumber.classList.toggle('like_added');
};
