let likeButtons = document.querySelectorAll('.like-button__heart')

likeButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
        let likeNumber = elem.querySelector('.likes-number')
        let favorite = elem.querySelector('.favorite')
        elem.classList.toggle('like_added')
        if (elem.classList.contains('like_added')) {
            likeNumber.textContent++;
            favorite.textContent = "favorite";
        } else {
            likeNumber.textContent--;
            favorite.textContent = "favorite_border";
        }
    })
})