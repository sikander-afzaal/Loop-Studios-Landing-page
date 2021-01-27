const navDiv = document.querySelector("#nav-div");
const ul = document.querySelector(".list");
const anchor = document.querySelectorAll(".navs");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
hamburger.addEventListener("click", () => {
  navDiv.classList.remove("translate");
  hamburger.classList.add("desktop");
  cross.classList.add("mobile");
});
cross.addEventListener("click", () => {
  navDiv.classList.add("translate");
  hamburger.classList.remove("desktop");
  cross.classList.remove("mobile");
});
