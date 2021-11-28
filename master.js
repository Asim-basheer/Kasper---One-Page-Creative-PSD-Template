let burgurMenu = document.querySelector(".bar");
let changeColor = document.querySelector(".change-color");
let links = document.querySelector(".links");
let lis = document.querySelectorAll(".links li a");
burgurMenu.onclick = function () {
  links.classList.toggle("active");
};

window.onscroll = function () {
  if (scrollY > 565) {
    changeColor.classList.add("change");
  } else {
    changeColor.classList.remove("change");
  }
};
