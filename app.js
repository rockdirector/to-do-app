// dan bryk - bloc - to-do-app assignment pt. 2 - mar 27/19

function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.classList.add('mdl-checkbox__input'); // add MDL class to checkbox

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
            toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      newLi.classList.add('mdl-list_item'); // add MDL class to entire <li>

    });

  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });

    newToDoText.value = '';
    id++; // increment id
    console.log("id: " + id);
    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
//  alert("The window has loaded!");
  onReady();
};
