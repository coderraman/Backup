let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (!document.getElementById("inputValue").value == "") {
    let inputValue = document.querySelector("#inputValue").value;
    const h1 = document.getElementById("value");
    let listValue = document.querySelector("#list");
    let finlValue = document.createElement("li");
    finlValue.className = "List";
    finlValue.innerText = inputValue;
    listValue.appendChild(finlValue);
    finlValue.style.listStyle = "none";

    document.getElementById("inputValue").value = "";

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    removeButton.addEventListener("click", () => {
      finlValue.remove();
    });
    let saveButton = document.createElement("button");
    saveButton.innerText = "Save";

    saveButton.addEventListener("click", () => {
      saveButton.style.backgroundColor = "green";
      saveButton.style.Color = "white";
      alert("Task has saved!");
    });

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      let userInput = prompt("Enter Here");
      finlValue.innerHTML = userInput;
      finlValue.appendChild(removeButton);
      finlValue.appendChild(saveButton);
      finlValue.appendChild(editButton);
    });

    finlValue.appendChild(removeButton);
    finlValue.appendChild(saveButton);
    finlValue.appendChild(editButton);
  }
});
