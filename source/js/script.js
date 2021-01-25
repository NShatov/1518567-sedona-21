const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const loginForm = document.querySelector(".page-form__login");
const loginName = document.querySelector(".page-form__field--name");
const loginSurname = document.querySelector(".page-form__field--surname");
const loginPhone = document.querySelector(".page-form__field--phone");
const loginEmail = document.querySelector(".page-form__field--email");
const buttonForm = document.querySelector (".page-form__button");
const modalSuccess = document.querySelector(".modal-success");
const modalError = document.querySelector(".modal-error");
const modalClose = document.querySelector(".modal__button--close");
const buttonOk = document.querySelector(".modal__button--ok");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

if (buttonForm) {
  loginForm.addEventListener("submit", function(evt) {
  if (!loginName.value || !loginSurname.value) {
    evt.preventDefault();
    modalError.classList.add("modal-show");
    loginName.classList.add("page-form__field--error");
    loginSurname.classList.add("page-form__field--error");
  } else {
    evt.preventDefault();
    modalSuccess.classList.add("modal-show");
    loginName.classList.remove("page-form__field--error");
    loginSurname.classList.remove("page-form__field--error");
  }
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  if (modalSuccess.classList.contains("modal-show")) {
    modalSuccess.classList.remove("modal-show");
  }
});

buttonOk.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modalError.classList.contains("modal-show")) {
    modalError.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalSuccess.classList.contains("modal-show")) {
      evt.preventDefault();
      modalSuccess.classList.remove("modal-show");
    } else if (modalError.classList.contains("modal-show")) {
        modalError.classList.remove("modal-show");
    }
  }
});
} else {
  console.log("На странице отсутствует форма!");
}
