let items = [
  { name: "Dmitrii1", age: 30 },
  { name: "Dmitrii2", age: 30 },
  { name: "Dmitrii3", age: 30 },
  { name: "Dmitrii4", age: 30 },
  { name: "Dmitrii5", age: 30 },
  { name: "Dmitrii6", age: 30 },
  { name: "Dmitrii7", age: 30 },
  { name: "Dmitrii8", age: 30 },
  { name: "Dmitrii9", age: 30 },
  { name: "Dmitrii10", age: 30 },
  { name: "Dmitrii11", age: 30 },
  { name: "Dmitrii12", age: 30 },
  { name: "Dmitrii13", age: 30 },
  { name: "Dmitrii14", age: 30 },
  { name: "Dmitrii15", age: 30 },
  { name: "Dmitrii16", age: 30 },
  { name: "Dmitrii17", age: 30 },
  { name: "Dmitrii18", age: 30 },
  { name: "Dmitrii19", age: 30 },
  { name: "Dmitrii20", age: 30 },
  { name: "Dmitrii21", age: 30 },
  { name: "Dmitrii1", age: 30 },
  { name: "Dmitrii2", age: 30 },
  { name: "Dmitrii3", age: 30 },
  { name: "Dmitrii4", age: 30 },
  { name: "Dmitrii5", age: 30 },
  { name: "Dmitrii6", age: 30 },
  { name: "Dmitrii7", age: 30 },
  { name: "Dmitrii8", age: 30 },
  { name: "Dmitrii9", age: 30 },
  { name: "Dmitrii10", age: 30 },
  { name: "Dmitrii11", age: 30 },
  { name: "Dmitrii12", age: 30 },
  { name: "Dmitrii13", age: 30 },
  { name: "Dmitrii14", age: 30 },
  { name: "Dmitrii15", age: 30 },
  { name: "Dmitrii16", age: 30 },
  { name: "Dmitrii17", age: 30 },
  { name: "Dmitrii18", age: 30 },
  { name: "Dmitrii19", age: 30 },
  { name: "Dmitrii20", age: 30 },
  { name: "Dmitrii21", age: 30 },
];

const itemsOfPages = 3;
(function () {
  const listItem = document.querySelector(".pagination ul");
  const createPages = Math.ceil(items.length / itemsOfPages);
  for (let i = 0; i < createPages; i++) {
    const li = document.createElement("li");
    li.classList.add("page-number");
    li.innerHTML = i + 1;
    listItem.appendChild(li);
  }

})();

const paginationList = document.querySelector(".pagination__list");
const pageNumbers = document.querySelectorAll(".page-number");

for (const pageNumber of pageNumbers) {
  pageNumber.addEventListener('click', () => {
    for (let i = 0; i < pageNumbers.length; i++) {
      pageNumbers[i].classList.remove("current-page");
    }
    let currentPage = +pageNumber.innerHTML;
    pageNumber.classList.add("current-page");
    showItems(currentPage);
  })
}

let showItems = (currentPage) => {
  let start = (currentPage - 1) * itemsOfPages;
  let end = start + itemsOfPages;
  let notes = items.slice(start, end);
  paginationList.innerHTML = " ";
  for (const note of notes) {
    const square = document.createElement("div");
    square.classList.add("pagination__items");
    square.innerHTML = note.name + " " + note.age;
    paginationList.appendChild(square);
  }
};