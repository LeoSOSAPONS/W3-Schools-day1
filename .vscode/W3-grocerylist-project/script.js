const groceries = document.getElementsByClassName("groceries")[0];
const trash = document.getElementById("trash");
const list = document.getElementById("list");
const input = document.getElementById("input");

trash.addEventListener("click", function () {
  list.innerHTML = "";
});
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});
function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "-" + input.value;
  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });

  h2.addEventListener("dblclick", function () {
    h2.innerHTML = " ";
  });
  list.insertAdjacentElement("beforeend", h2);

  input.value = "";
}
