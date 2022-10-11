const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const ICON = "expand_more";

const velogTimeBtn = $(".time__btn");
const velogTimeList = $$(".time__item");

function selectVelogTime(e) {}
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
