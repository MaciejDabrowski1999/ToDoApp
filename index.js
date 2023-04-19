let toDoInput //Miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo //info o braku zadań
let addBtn //przycisk dodawania elementów
let ulList //lista zadań
let newTodos

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
//pbierać informacje => zapisywać info => tworzyć element => w elemencie pobrać informacje => wyświetlić element
const addNewTodos = () => {
    if (toDoInput.value !== '') {
        newTodos = document.createElement('li');
        newTodos.textContent = toDoInput.value
        ulList.append(newTodos);
        toDoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}


document.addEventListener('DOMContentLoaded', main)