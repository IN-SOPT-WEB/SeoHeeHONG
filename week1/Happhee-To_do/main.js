const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);
const TODAY = 0;
const TOMORROW = 1;

const INPUT = 0;
const BUTTON = 1;

const todoLists = $$(".todo__list");

function isToday(name) {
  return name == "todo__today__info" ? TODAY : TOMORROW;
}

function removeTotoList(e) {}

// 폼 submit을 통해 리스트를 추가하고, 애니메이션으로 사용자에게 어떤 리스트가 추가되었는지 보여주기
function addTodoList(e) {
  e.preventDefault();

  const currentForm = e.target;
  const current = isToday(currentForm.name);

  let todoList = todoLists[current];
  const addBtn = currentForm[BUTTON];
  const input = currentForm[INPUT];

  const li = document.createElement("li");
  if (input.value != "") {
    li.innerHTML = `<span>${input.value}
              </span> <span class="todo__list__cancleBtn material-icons"> cancel </span>
            `;
    todoList.appendChild(li);
    input.value = "";
    setTimeout(() => {
      li.classList.add("swing");
    }, 10);
    li.classList.remove("swing");
  } else {
    alert("할일을 작성해주세요");
  }
}

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
