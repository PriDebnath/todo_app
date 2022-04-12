let input = document.querySelector(".input");
let addBtn = document.querySelector(".add_btn");

let ul = document.querySelector("ul");
let todoText = JSON.parse(localStorage.getItem("todo"));

if (todoText) {
  todoText.forEach((text) => {
    handleSubmit(text);
  });
}

addBtn.addEventListener("click", () => {
  handleSubmit();
});



function handleSubmit(localText) {
  if (input.value || localText) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.innerText = input.value;
    button.innerText = "-";
    button.classList = "delete_btn";
    if (localText) {
      li.innerText = localText;
    }
    ul.appendChild(li);
    ul.appendChild(button);
    button.addEventListener("click", () => {
      ul.removeChild(li);
      ul.removeChild(button);
      updateLocalStore();
    });
    li.addEventListener("click", () => {
      li.classList.toggle("complete");
    });
    updateLocalStore();
  }
  input.value = "";
}
function updateLocalStore() {
  let allLi = document.querySelectorAll("li");
  let todo = [];
  if (allLi) {
    allLi.forEach((singleLi) => {
      todo.push(singleLi.innerText);
    });
    localStorage.setItem("todo", JSON.stringify(todo));
  }
}
