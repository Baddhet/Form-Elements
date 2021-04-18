const guestForm = document.querySelectorAll(".guest__form");
const guestArrowDown = document.querySelectorAll(".guest__form i");
const guestDropdown = document.querySelector(".guest__dropdown");
const guestButtons = document.querySelectorAll(".guest__button");
const guestNumbers = document.querySelectorAll(".guest__number");
const guestResetButton = document.querySelector(".guest__reset-button");
const guestText = document.querySelector(".guest__form-text");

guestForm.forEach((elem) => {
  elem.addEventListener('click', () => {
    guestDropdown.classList.toggle("expanded");
    if (guestDropdown.classList.contains("expanded")) {
      guestArrowDown[0].style.transform = "rotate(180deg)";
    } else {
      guestArrowDown[0].style.transform = "rotate(0deg)";
    }
  })
});

guestButtons.forEach((elem) => {
  if (elem.innerHTML === "-") {
    elem.style.color = "red";
  }
  console.log(guestButtons[0].nextElementSibling.textContent)

  elem.addEventListener("click", () => {
    let formText;
    let numbersOfGuests = 0;

    if (elem.innerHTML === "+") {
      elem.previousElementSibling.textContent++;
      numbersOfGuests = Number(guestButtons[0].nextElementSibling.innerHTML) +
        Number(guestButtons[2].nextElementSibling.innerHTML) +
        Number(guestButtons[4].nextElementSibling.innerHTML);
    } else if (elem.nextElementSibling.innerHTML > "0") {
      elem.nextElementSibling.textContent--;
      numbersOfGuests = Number(guestButtons[0].nextElementSibling.innerHTML) +
        Number(guestButtons[2].nextElementSibling.innerHTML) +
        Number(guestButtons[4].nextElementSibling.innerHTML);
    }

    if (numbersOfGuests === 1) {
      formText = " гость";
    } else if (numbersOfGuests > 1 && numbersOfGuests < 5) {
      formText = " гостя";
    } else {
      formText = " гостей";
    }
    guestText.textContent = numbersOfGuests + formText;
  })
});

guestResetButton.addEventListener("click", () => {
  guestNumbers.forEach((elem) => {
    guestText.textContent = "Сколько гостей";
    elem.textContent = 0;
  })
});