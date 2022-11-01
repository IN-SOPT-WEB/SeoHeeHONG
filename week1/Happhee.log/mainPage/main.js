const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const ICON = "expand_more";

const velogTimeBtn = $(".time__btn");
const velogTimeList = $$(".time__item");

const section = $("section");
const velogLength = $$(".velog").length - 2;
const CARD_WIDTH = 400;
let currentSlide = 1;

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
function openModalArticle(e) {
  console.log(e.currentTarget);
  const modalBody = $(".modal__body");
  const modal = $(".modal");

  modalBody.innerHTML = e.currentTarget.innerHTML;
  modal.classList.remove("hide");
}
function closeModalArticle() {
  const modal = $(".modal");
  modal.classList.add("hide");
}

const slidePrevious = () => {
  if (currentSlide === 1) {
    currentSlide = velogLength;
  } else {
    currentSlide--;
  }
  section.style.transform = `translateX(-${CARD_WIDTH * (currentSlide - 1)}px)`;
};

const slideNext = () => {
  if (currentSlide >= velogLength) {
    currentSlide = 0;
  }
  section.style.transform = `translateX(-${CARD_WIDTH * currentSlide}px)`;
  currentSlide += 1;
};

function attachEvent({
  velogArticleList,
  modalCancelBtn,
  previousBtn,
  nextBtn,
}) {
  velogTimeBtn.addEventListener("click", toggleVelogTimeMenu);
  velogTimeList.forEach((velogTime) => {
    velogTime.addEventListener("click", selectVelogTime);
  });
  velogArticleList.forEach((velogArticle) => {
    velogArticle.addEventListener("click", openModalArticle);
  });
  modalCancelBtn.addEventListener("click", closeModalArticle);

  previousBtn.addEventListener("click", slidePrevious);
  nextBtn.addEventListener("click", slideNext);
}

window.onload = () => {
  attachEvent({
    velogArticleList: $$(".velog"),
    modalCancelBtn: $(".modal__cancleBtn"),
    previousBtn: $(".prev_btn"),
    nextBtn: $(".next_btn"),
  });
};
