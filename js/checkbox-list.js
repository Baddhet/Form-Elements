const checkBoxList = document.querySelectorAll('.checkbox-list__form');
const checkBoxListDropdown = document.querySelector('.checkbox-list__dropdown');
const checkBoxListArrowDown = document.querySelectorAll('.checkbox-list__form i');

if (checkBoxListDropdown.classList.contains("expanded")) {
  checkBoxListArrowDown[1].style.transform = "rotate(180deg)";
} else {
  checkBoxListArrowDown[1].style.transform = "rotate(0deg)";
} 

checkBoxList[1].addEventListener('click', () => {
  console.log('124');
  checkBoxListDropdown.classList.toggle("expanded");
  if (checkBoxListDropdown.classList.contains("expanded")) {
    checkBoxListArrowDown[1].style.transform = "rotate(180deg)";
  } else {
    checkBoxListArrowDown[1].style.transform = "rotate(0deg)";
  }
})