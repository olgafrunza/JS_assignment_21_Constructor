class Task {
  constructor(item, desc) {
    this.id = Math.floor(Math.random() * 5000);
    this.item = item;
    this.desc = desc;
    this.completed = false;
  }
}

// const task1 = new Task('study React', 'kadfsjkasdjfksajdfkj');
// const task2 = new Task('Go Shopping', 'aksdjfaksjfasjdf');

// console.log(task1);
// console.log(task2);

class TaskList {
  constructor() {
    this.tasks = []; // this eqauls to allTodos
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((item) => item.id !== Number(id));
  }

  toggleTask(id) {
    const index = this.tasks.findIndex((item) => item.id == id);
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}

const form = document.getElementById("todo-form");
const inputItem = document.getElementById("todo-item");
const inputDesc = document.getElementById("todo-desc");
const ulTodoList = document.getElementById("todo-list");

const allTodos = new TaskList();
// console.log(allTodos);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = inputItem.value;
  const desc = inputDesc.value;
  const task = new Task(item, desc);
  allTodos.addTask(task);

  // console.log(allTodos);
  const liItem = document.createElement("li");
  liItem.dataset.id = task.id;
  liItem.innerHTML = `<span>${task.item}</span> - <span>${task.desc}</span><button>X</button>`;
  ulTodoList.appendChild(liItem);
});

ulTodoList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.textContent === "X") {
    console.log("delete that todo");
    const id = e.target.parentElement.dataset.id;
    console.log(id);
    e.target.parentElement.remove();
    console.log(allTodos.tasks);
    allTodos.removeTask(id);
    console.log(allTodos.tasks);
  } else {
    let id;
    if (e.target.tagName === "LI") id = e.target.dataset.id;
    else id = e.target.parentElement.dataset.id;
    allTodos.toggleTask(id);
    console.log(allTodos.tasks);
  }
});
