let toDoInput //Miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo //info o braku zadań
let addBtn //przycisk dodawania elementów
let ulList //lista zadań
// let newTodo
let popUp
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn
let deleteTodoItem


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popUp = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodos)
    ulList.addEventListener('click', check)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
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
const check = (e) => {
    if (e.target.matches('.complete')) {
        e.target.classList.toggle('completed')
        e.target.closest('li').classList.toggle('completed');
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popUp.style.display = 'flex'
}
const closePopup = () => {
    popUp.style.display = 'none'
    popupInfo.textContent = ''
}
const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popupInfo.textContent = ''
        popUp.style.display = 'none'
    } else {
        popupInfo.textContent = 'Musisz dodać treść!'
    }
}

const deleteTodo = (e) => {
    deleteTodoItem = e.target.closest('li')
    ulList.removeChild(deleteTodoItem)
    //e.target.closest('li').remove()
    let allToDos = ulList.querySelectorAll('li')
    if (allToDos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście'
    }
}

document.addEventListener('DOMContentLoaded', main)