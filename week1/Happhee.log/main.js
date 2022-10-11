const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const ICON = "expand_more";

const velogTimeBtn = $(".time__btn");
const velogTimeList = $$(".time__item");

function selectVelogTime(e) {
  const selectTime = e.target.innerText;
  velogTimeBtn.value = selectTime;

  toggleVelogTimeMenu();

  velogTimeList.forEach((velogTime) => {
    if (
      velogTime.classList.contains("select") &&
      velogTime.textContent != selectTime
    ) {
      velogTime.classList.remove("select");
    } else if (
      !velogTime.classList.contains("select") &&
      velogTime.textContent == selectTime
    ) {
      velogTime.classList.add("select");
    }
  });
}
// 시간 메뉴 토글링 제어 함수
function toggleVelogTimeMenu() {
  const timeTypeUl = $(".time__type");

  if (timeTypeUl.classList.contains("hide"))
    timeTypeUl.classList.remove("hide");
  else timeTypeUl.classList.add("hide");
}
function attachEvent() {
  velogTimeBtn.addEventListener("click", toggleVelogTimeMenu);
  velogTimeList.forEach((velogTime) => {
    velogTime.addEventListener("click", selectVelogTime);
  });
}

window.onload = () => {
  attachEvent();
};
