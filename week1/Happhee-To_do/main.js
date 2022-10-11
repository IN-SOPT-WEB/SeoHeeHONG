const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);
const TODAY = 0;
const TOMORROW = 1;

const INPUT = 0;
const BUTTON = 1;

const todoLists = $$(".todo__list");

function removeTotoList(e) {}

function addTodoList(e) {}

function selectTodoType(e) {}
// 이벤트 부착
function attachEvent({ todoForms, selectTypeBtns }) {
  todoForms.forEach((todoForm) => {
    todoForm.addEventListener("submit", addTodoList);
  });
  todoLists.forEach((todoList) => {
    todoList.addEventListener("click", removeTotoList);
  });
  selectTypeBtns.forEach((typeBtn) => {
    typeBtn.addEventListener("click", selectTodoType);
  });
}

window.onload = () => {
  attachEvent({
    todoForms: $$(".todo__form"),
    selectTypeBtns: $$(".nav__item"),
  });
};
