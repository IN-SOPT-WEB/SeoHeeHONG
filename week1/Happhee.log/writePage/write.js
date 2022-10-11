const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const BUTTON = 2;
const TAGCONTENT = 1;

function removeTag(e) {}

function addInputTag(e) {
  const tagList = $("ul");
  const tagItemList = $$("li");
  let tagValueList = [];

  tagItemList.forEach((tag) => {
    tagValueList.push(tag.childNodes[TAGCONTENT].innerText);
  });

  if (e.key == "Enter") {
    if (tagValueList.includes(e.target.value)) {
      alert("이미 작성된 태그입니다");
    } else if (e.target.value != "") {
      const li = document.createElement("li");
      li.innerHTML = `<span>${e.target.value}
              </span> <span class="tag__cancleBtn material-icons"> cancel </span>
            `;
      tagList.appendChild(li);
      e.target.value = "";
      li.childNodes[BUTTON].addEventListener("click", removeTag);
    } else {
      alert("태그명을 작성해주세요");
    }
  }
}

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
