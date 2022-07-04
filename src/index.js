document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //const description = document.querySelector("#new-task-description");
  let form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value);
    form.reset();
  })
  
});

const handleToDo = todo => {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete)
  btn.textContent = "x";
  p.textContent = `${todo} `;
  p.appendChild(btn);
  console.log(p)
  document.querySelector("#tasks").appendChild(p);
}

const handleDelete = e => {
  e.target.parentNode.remove();
}
