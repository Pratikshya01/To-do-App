const input = document.getElementById("input");
const addButton = document.getElementById("btn");
const list = document.getElementById("list");
function addTodoItem() {
  if (input.value.trim() === "") {
    return;
  }
  let userInput = input.value.trim();
  appendListItem(userInput);
  input.value = "";
  input.focus();
}
function appendListItem(listItem) {
  const li = document.createElement("li");
  const paragraph = document.createElement("p");
  const btn = document.createElement("button");
  paragraph.innerText = listItem;
  btn.innerText = "x";
  btn.classList.add("dlt");
  li.append(paragraph);
  li.append(btn);
  list.append(li);
  btn.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}
addButton.addEventListener("click", addTodoItem);
