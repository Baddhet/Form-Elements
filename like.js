let like = document.querySelector('.like-button__heart');
let likesNumber = document.querySelector('.likes-number');
let favorite = document.querySelector('.favorite');

like.onclick = function () {
    if(like.classList.contains('like_added')) {
        likesNumber.textContent--;
        document.getElementById("favorite").innerHTML = "favorite_border";
    }
    else {
        likesNumber.textContent++;
        document.getElementById("favorite").innerHTML = "favorite";
    }
    like.classList.toggle('like_added');
    likesNumber.classList.toggle('like_added');
};
