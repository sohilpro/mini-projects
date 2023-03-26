"use strict";
let $ = document;
let inputUsername = $.querySelector("#input-username");
let inputPassword = $.querySelector("#input-password");
let btnSubmit = $.querySelector(".btn_submit");

let title_form = $.querySelector(".title_form");
let form_container = $.querySelector(".form_container");
let plase_whate = $.querySelector(".plase_whate");
let b_time = $.querySelector(".b_time");
let closedElem = $.querySelector(".closed");
let form_login = $.querySelector(".form_login");

let btnElem = $.querySelector(".btn");
let spanElem = $.querySelector(".efect");
let divElem = $.querySelector(".div_submit");
let users = [
  { id: 1, name: "admin", password: "admin" },
];


function chekedUser() {
  let inputPassValue = inputPassword.value;
  let inputUserValue = inputUsername.value;

  if (inputUserValue !== "" && inputPassValue !== "") {
    plase_whate.style.top = 0;
    form_container.classList.add("blur");

    setTimeout(function () {
      b_time.style.width = "290px";
    }, 1000);

    setTimeout(() => {
      plase_whate.style.top = "-300px";
      b_time.style.width = "0px";
      form_container.classList.remove("blur");
      searchUser();
      inputUsername.value = "";
      inputPassword.value = "";
    }, 5000);

    function searchUser() {
      users.forEach((user) => {
        if (inputPassValue === user.password && inputUserValue === user.name) {
          title_form.textContent = "Login";
          title_form.style.color = "#0f0";
          inputPassword.style.borderColor = "#0f0";
          inputUsername.style.borderColor = "#0f0";
        } else {
          title_form.textContent = "Not Login";
          title_form.style.color = "#f00";
          inputPassword.style.borderColor = "#f00";
          inputUsername.style.borderColor = "#f00";
        }

        setTimeout(() => {
          title_form.textContent = "";
          title_form.insertAdjacentHTML("beforeend", `Login <span>Form</span>`);
          title_form.style.color = "rgb(223, 224, 224)";
          inputPassword.style.borderColor = "#fff";
          inputUsername.style.borderColor = "#fff";
        }, 3000);
      });
    }
  }
}

btnElem.addEventListener("click", chekedUser);

form_login.addEventListener("submit", function (event) {
  event.preventDefault();
});


closedElem.addEventListener("click", function () {
  plase_whate.style.top = "-300px";
  b_time.style.width = "0px";
  form_container.classList.remove("blur");
});


btnElem.addEventListener("mousedown", function (event) {
  if (event.offsetX <= 130) {
    spanElem.style.left = 0 + "px";
  } else {
    spanElem.style.left = 300 + "px";
  }

  spanElem.style.animation = "zoom 0.5s linear";
  divElem.style.marginTop = "25px";
  divElem.style.boxShadow = "0px 0px 0px #212121";

  setTimeout(function () {
    spanElem.style.removeProperty("animation");
  }, 500);

  setTimeout(function () {
    divElem.style.marginTop = "20px";
    divElem.style.boxShadow = "5px 5px 20px #111111";
  }, 250);
});
