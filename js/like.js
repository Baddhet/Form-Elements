let like = document.querySelectorAll('.like-button__heart');
let likesNumber = document.querySelector('.likes-number');
let favorite = document.querySelector('.favorite');

like.onclick = function () {
    if(like.classList.contains('like_added')) {
        likesNumber.textContent--;
        favorite.textContent = "favorite_border";
    }
    else {
        likesNumber.textContent++;
        favorite.textContent = "favorite";
    }
    like.classList.toggle('like_added');
    likesNumber.classList.toggle('like_added');
};
