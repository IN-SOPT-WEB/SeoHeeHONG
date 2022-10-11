const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const BUTTON = 2;
const TAGCONTENT = 1;

function removeTag(e) {}

function addInputTag(e) {}

function attachEvent({ input, tagBtnList }) {
  input.addEventListener("keyup", addInputTag);

  tagBtnList.forEach((tagBtn) => {
    tagBtn.addEventListener("click", removeTag);
  });
}

window.onload = () => {
  attachEvent({
    input: $("input"),
    tagBtnList: $$(".tag__cancleBtn"),
  });
};
