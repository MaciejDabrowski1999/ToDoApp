let toDoInput //Miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo //info o braku zadań
let addBtn //przycisk dodawania elementów
let ulList //lista zadań
// let newTodo

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodos)
}

const addNewTodos = () => {
    if (toDoInput.value !== '') {
        const newTodo = document.createElement('li');
        newTodo.textContent = toDoInput.value

        createToolsArea(newTodo)

        ulList.append(newTodo);
        toDoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}
//Funkcja tworząca przyciski
const createToolsArea = (newTodo) => {

    const divTools = document.createElement('div')
    divTools.classList.add('tools')
    newTodo.append(divTools)

    const completeBnt = document.createElement('button')
    completeBnt.classList.add('complete')
    completeBnt.innerHTML = '<i class="fas fa-check"></i>'

    const editBnt = document.createElement('button')
    editBnt.classList.add('edit')
    editBnt.textContent = 'EDIT'

    const deleteBnt = document.createElement('button')
    deleteBnt.classList.add('delete')
    deleteBnt.innerHTML = '<i class="fas fa-times"></i>'

    divTools.append(completeBnt, editBnt, deleteBnt)
}

document.addEventListener('DOMContentLoaded', main)