const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const BUTTON = 2;
const TAGCONTENT = 1;

const tagList = $("ul");

function setLocalStorage(tagList) {
  localStorage.setItem("tagList", JSON.stringify(tagList));
}
function initTagList() {
  const currentStorage = JSON.parse(localStorage.getItem("tagList"));
  currentStorage.forEach((tag) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${tag}
              </span> <span class="tag__cancleBtn material-icons"> cancel </span>
            `;
    tagList.appendChild(li);
    li.childNodes[BUTTON].addEventListener("click", removeTag);
  });
}

function removeTag(e) {
  const removeLi = e.target.parentNode;
  const removeBtn = e.target;
  const isRemove = confirm("정말 삭제하시겠습니까?");
  if (isRemove) {
    removeLi.remove();
    const currentStorage = JSON.parse(localStorage.getItem("tagList"));
    console.log(removeLi.childNodes[0].innerText);
    currentStorage.splice(
      currentStorage.indexOf(removeLi.childNodes[0].innerText),
      1
    );
    setLocalStorage(currentStorage);
  }
}

function addInputTag(e) {
  const tagItemList = $$("li");
  let tagValueList = [];

  tagItemList.forEach((tag) => {
    tagValueList.push(tag.childNodes[TAGCONTENT].innerText);
  });

  if (e.key == "Enter") {
    if (tagValueList.includes(e.target.value)) {
      alert("이미 작성된 태그입니다");
    } else if (e.target.value != "") {
      const currentStorage = JSON.parse(localStorage.getItem("tagList"));

      const li = document.createElement("li");
      li.innerHTML = `<span>${e.target.value}</span> <span class="tag__cancleBtn material-icons"> cancel </span>
            `;
      tagList.appendChild(li);

      if (!currentStorage.length) {
        setLocalStorage([e.target.value]);
      } else {
        console.log(e.target.value);
        setLocalStorage([...currentStorage, e.target.value]);
      }
      e.target.value = "";
      li.childNodes[BUTTON].addEventListener("click", removeTag);
    } else {
      alert("태그명을 작성해주세요");
    }
  }
}

function attachEvent({ input, tagBtnList }) {
  input.addEventListener("keypress", addInputTag);

  tagBtnList.forEach((tagBtn) => {
    tagBtn.addEventListener("click", removeTag);
  });
}

window.onload = () => {
  if (localStorage.getItem("tagList")) initTagList();

  attachEvent({
    input: $("input"),
    tagBtnList: $$(".tag__cancleBtn"),
  });
};
