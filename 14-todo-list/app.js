let todos;
const defaultTodos = [
    { text: 'Sleep like no tomorrow', done: true },
    { text: 'Cook all the food in the store', done: false },
    { text: 'Eat everything', done: false },
    { text: 'Get high on rice', done: false },
    { text: 'Purge like no man business', done: false },
    { text: 'Use some drug', done: false },
    { text: 'Star getting normal gradually', done: false },
    { text: 'Rush to toilet for last warning', done: false },
    { text: 'Feel relived', done: false },
    { text: 'Promise yourself never to try that again', done: false },
    { text: 'Start coding', done: false },
    { text: 'Repeat', done: false }
]


let todoItemIndexInEdit = null;
const currentEdit = {};

const todosElement = document.getElementById('todos');
const editModalElement = document.getElementById('edit-modal');
const todoFormElement = document.getElementById('todo-form');
const todoInputElement = document.getElementById('todo-input');
const todoStatElement = document.getElementById('todos-stat');
const editFormElement = document.getElementById('edit-form');
const editTextElement = document.getElementById('edit-text');
const cancelEditElement = document.getElementById('cancel-edit');

setupTodos();

function setupTodos() {
    let storedTodos = window.localStorage.getItem('my_todo-items');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    } else {
        todos = defaultTodos;
    }
    updateView();
}

todoFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = todoInputElement.value;
    addTodo(todoText);
})

function addTodo(text) {
    todos.push({ text, done: false });
    todoInputElement.value = '';
    updateView();
}

todosElement.addEventListener('click', (e) => {
    const { todo_index, purpose } = e.target.dataset;
    if (!todo_index) return
    if (!purpose) {
        toggleTodoStatus(todo_index);
    } else {
        if (purpose === 'delete') {
            removeTodo(todo_index);
        } else if (purpose === 'edit') {
            initEdit(todo_index);
        }
    }
})

function toggleTodoStatus(index) {
    todos[index].done = !todos[index].done;
    updateView();
}

function removeTodo(index) {
    todos.splice('index', 1);
    updateView();
}

function initEdit(todoIndex) {
    todoItemIndexInEdit = todoIndex;
    editModalElement.classList.add('active');
    editTextElement.value = todos[todoItemIndexInEdit].text;
}

editFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const newTodoText = editTextElement.value;
    if (!newTodoText) return;
    if (newTodoText !== todos[todoItemIndexInEdit].text) {
        editTodoItem(newTodoText);
    }
    editModalElement.classList.remove('active');
})

function editTodoItem(newText) {
    todos[todoItemIndexInEdit].text = newText;
    updateView();
}

cancelEditElement.addEventListener('click', () => {
    editModalElement.classList.remove('active');
})

function updateView() {
    persistTodos();
    renderTodoItems();
    renderStats();
}

function persistTodos() {
    window.localStorage.setItem('my_todo-items', JSON.stringify(todos));
}

function renderTodoItems() {
    todosElement.innerHTML = '';
    todos.forEach((todo, todoIndex) => {
        todosElement.innerHTML +=
            `
            <div class="todo-item" data-todo_index="${todoIndex}">
                <input type="checkbox" name="" id="" class="todo-status" data-todo_index="${todoIndex}" ${todo.done ? 'checked' : ''}>
                <span class="todo-text" data-todo_index="${todoIndex}">${todo.text}</span>
                <img src="./media/edit.svg" class="edit-todo" alt="" data-todo_index="${todoIndex}" data-purpose="edit">
                <img src="./media/delete.svg" alt="" class="remove-todo" data-todo_index="${todoIndex}" data-purpose="delete">
            </div>
            `
    })
}

function renderStats() {
    const todosCount = todos.length;
    const pendingCount = todos.filter(todo => !todo.done).length;
    const doneCount = todos.filter(todo => todo.done).length;
    todoStatElement.innerHTML =
        `
            <span>Total: ${todosCount}</span>
            <span>Todo: ${pendingCount}</span>
            <span>Done: ${doneCount}</span>
    `
}
