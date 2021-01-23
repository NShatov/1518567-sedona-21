const submit = document.querySelector(".page-form__button");
const modalSucces = document.querySelector(".modal-success");
const modalError = document.querySelector(".modal-error");
const modalClose = document.querySelector(".modal__button--close");
const loginName = document.querySelector(".page-form__field--name");
const loginSurname = document.querySelector(".page-form__field--surname");
const loginPhone = document.querySelector(".page-form__field--phone");
const loginEmail = document.querySelector(".page-form__field--email");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

submit.addEventListener("submit", function (evt){
  if (!loginName.value || !loginSurname.value) {
    evt.preventDefault();
    modalError.classList.add("modal-show");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginName.value);
      modalSucces.classList.add("modal-show");
    }
  }
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  modalSuccess.classList.remove("modal-show");
  modalError.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSucces.classList.contains("modal-show") ||
    (modalError.classList.contains("modal-show") {
      evt.preventDefault();
      modalSucces.classList.remove("modal-show");
      modalError.classList.remove("modal-show");
    }
  }
});
