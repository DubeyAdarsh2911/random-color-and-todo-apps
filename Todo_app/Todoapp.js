let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

// console.dir(btn);

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let btnn = document.createElement("button");
  btnn.innerText = "delete";
  btnn.classList.add("delete");
  item.appendChild(btnn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  }
});
