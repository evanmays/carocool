const hamburgerMenu = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".nav-items");
const img = document.querySelector("img");
const container = document.querySelector(".container");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  navItems.classList.toggle("open");
  if (img) {
    img.classList.toggle("close");
  }
  if (container) {
    container.classList.toggle("close");
  }
});