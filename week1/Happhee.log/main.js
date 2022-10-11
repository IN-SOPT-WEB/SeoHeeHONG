const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const ICON = "expand_more";

const velogTimeBtn = $(".time__btn");
const velogTimeList = $$(".time__item");

// 선택한 시간타입을 알아내고 다시 토글 후 select 클래스를 제어해 리스트의 배경색 제어
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
function toggleVelogTimeMenu() {}
function attachEvent() {
  velogTimeBtn.addEventListener("click", toggleVelogTimeMenu);
  velogTimeList.forEach((velogTime) => {
    velogTime.addEventListener("click", selectVelogTime);
  });
}

window.onload = () => {
  attachEvent();
};
