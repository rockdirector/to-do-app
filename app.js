// dan bryk - bloc - to-do-app assignment pt. 2 - mar 27/19

function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    // console.log(event);
    // console.log(this);
    event.preventDefault();

    let title = NEW_TODO_TEXT.value; // get text
    let newLi = document.createElement('li'); // create a new <li>

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', function(event) {
        TODO_LIST.removeChild(this.parentElement); // remove the <li>
    })

    deleteButton.classList.add('mdl-button');
    deleteButton.classList.add('mdl-js-button'); // add mdl classes to delete button

    newLi.textContent = title; // set the title
    // let checkbox = document.createElement('input'); // create a new input
    let checkbox = document.createElement('input'); // create a new input
    checkbox.type = "checkbox"; // set the input item's type to checkbox

    checkbox.classList.add('mdl-checkbox__input'); // add mdl class to the checkbox

    newLi.appendChild(checkbox); // attach checkbox to the <li>

    newLi.appendChild(deleteButton); // attach delete button to the <li>

    newLi.classList.add('mdl-list__item'); // add mdl class to the li

    TODO_LIST.appendChild(newLi); // attach the li to the ul

    NEW_TODO_TEXT.value = ''; // empty form field for next input

  });
}

window.onload = function() {
//  alert("The window has loaded!");
  onReady();
};
