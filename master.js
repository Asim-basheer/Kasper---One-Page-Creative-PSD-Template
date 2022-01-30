const burgurMenu = selector(".bar"),
  changeColor = selector(".change-color"),
  links = selector(".links"),
  lis = document.querySelectorAll(".links li a");

burgurMenu.onclick = function () {
  links.classList.toggle("active");
  lis.forEach((link) => {
    link.addEventListener("click", function () {
      links.classList.remove("active");
    });
  });
};

window.onscroll = function () {
  if (scrollY > 565) {
    changeColor.classList.add("change");
  } else {
    changeColor.classList.remove("change");
  }
};

function selector(element) {
  document.querySelector(element);
}
