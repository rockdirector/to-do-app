// dan bryk - bloc - to-do-app assignment bonus - mar 28/19

function onReady() {
  let id = 0;
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const toDosJson = localStorage.getItem('toDosJson');
    // console.log("toDosJson on load: "+toDosJson);

  if (toDosJson != null) {
    console.log("toDosJson is not null");
    toDos = JSON.parse(toDosJson);
    id = localStorage.getItem('id');
    // console.log("toDos: "+toDos);
    // console.log("toDosJson: "+toDosJson);
  }

  console.log("id ="+id);

  function saveLocal() {
    let toDosJson = JSON.stringify(toDos);
    localStorage.setItem("toDosJson", toDosJson);
    localStorage.setItem("id", id);
    // console.log("toDosJson: "+toDosJson);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "toDo"+toDo.id;
    // console.log("toDo.complete = "+toDo.complete);
    // document.getElementById(toDo.id).checked = toDo.complete;
    checkbox.classList.add('mdl-checkbox__input'); // add MDL class to checkbox

    // checkbox toggles complete boolean
    checkbox.addEventListener('click', function(event) {
      toDo.complete = !toDo.complete;
      // console.log("toDo.id ="+toDo.id);
      // console.log("toDo.complete ="+toDo.complete);
      // console.log("checkbox.id ="+checkbox.id);
    saveLocal();
  });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', function(event) {
      event.preventDefault();
          toDos = toDos.filter(function(item) {
        return item.id !== toDo.id;
      })
      saveLocal();
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
    // console.log("id: " + id);
    renderTheUI();
    saveLocal();
  }

  function clearAll() {
    toDos = [];
    id = 0;
    localStorage.clear(toDosJson);
    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    // console.log("added");
  });

  clearAllButton.addEventListener('click', event => {
    event.preventDefault();
    clearAll();
    // console.log("all cleared");
    renderTheUI();
  });

  saveLocal();

  renderTheUI();
}

window.onload = function() {
 // alert("The window has loaded!");
  onReady();
};
