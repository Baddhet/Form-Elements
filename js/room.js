const roomOptionForm = document.querySelectorAll(".room-option__form");
const roomOptionDropdown = document.querySelector(".room-option__dropdown");
const keyboardArrowDown = document.querySelectorAll(".room-option i");
const roomOptionButtons = document.querySelectorAll(".room-option__buttons");
const roomOptionText = document.getElementById("room-option__text");

if (roomOptionDropdown.classList.contains("expanded")) {
    keyboardArrowDown[1].style.transform = "rotate(180deg)";
} else {
    keyboardArrowDown[1].style.transform = "rotate(0deg)";
} 

roomOptionForm[1].addEventListener('click', () => {
    roomOptionDropdown.classList.toggle("expanded");
    if (roomOptionDropdown.classList.contains("expanded")) {
        keyboardArrowDown[1].style.transform = "rotate(180deg)";
    } else {
        keyboardArrowDown[1].style.transform = "rotate(0deg)";
    }    
})

roomOptionButtons.forEach((elem) => {
    elem.addEventListener("click", () =>{
        if (elem.innerHTML === "+") {
            elem.previousElementSibling.textContent++;
            roomOptionText.textContent = roomOptionButtons[0].nextElementSibling.innerHTML + " спальни, " + roomOptionButtons[2].nextElementSibling.innerHTML + " кровати...";
        } else if (elem.nextElementSibling.innerHTML > "0") {
            elem.nextElementSibling.textContent--;
            roomOptionText.textContent = roomOptionButtons[0].nextElementSibling.innerHTML + " спальни, " + roomOptionButtons[2].nextElementSibling.innerHTML + " кровати...";
        }
    })
})
