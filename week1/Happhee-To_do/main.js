const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);
const TODAY = 0;
const TOMORROW = 1;

const INPUT = 0;
const BUTTON = 1;

const todoListGroup = $$(".todo__list");

function isToday(name) {
  return name == "todo__today__info" ? TODAY : TOMORROW;
}
// ul에서 선택한 할일 삭제
function removeTodoList(e) {
  if (e.target.classList.contains("todo__list__cancleBtn")) {
    const removeLi = e.target.parentNode;
    const removeBtn = e.target;
    const isRemove = confirm("정말 삭제하시겠습니까?");
    if (isRemove) removeLi.remove();
  }
}
// 폼 submit을 통해 리스트를 추가하고, 애니메이션으로 사용자에게 어떤 리스트가 추가되었는지 보여주기
function addTodoList(e) {
  e.preventDefault();

  const currentForm = e.target;
  const current = isToday(currentForm.name);

  let todoList = todoListGroup[current];
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
// todolist 보기 타입에 따라 todo_hide 클래스 속성 추가 및 제거
function selectTodoType(e) {
  let todaySection = todoListGroup[TODAY].parentNode;
  let tomorrowSection = todoListGroup[TOMORROW].parentNode;

  switch (e.target.innerHTML) {
    case "Today":
      todaySection.classList.remove("todo_hide");
      tomorrowSection.classList.add("todo_hide");
      break;

    case "Tomorrow":
      todaySection.classList.add("todo_hide");
      tomorrowSection.classList.remove("todo_hide");
      break;

    case "All":
      todaySection.classList.remove("todo_hide");
      tomorrowSection.classList.remove("todo_hide");
      break;
  }
}
// 이벤트 부착
function attachEvent({ todoFormList, selectTypeBtnList }) {
  todoFormList.forEach((todoForm) => {
    todoForm.addEventListener("submit", addTodoList);
  });
  todoListGroup.forEach((todoList) => {
    todoList.addEventListener("click", removeTodoList);
  });
  selectTypeBtnList.forEach((selectTypeBtn) => {
    typeBtn.addEventListener("click", selectTodoType);
  });
}

window.onload = () => {
  attachEvent({
    todoFormList: $$(".todo__form"),
    selectTypeBtnList: $$(".nav__item"),
  });
};
