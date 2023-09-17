const nametag = document.querySelector("#nameitalics");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".nav-items");
const img = document.querySelector("img");
const container = document.querySelector(".container");
const footer = document.querySelector(".footer");

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("change")) {
    nametag.classList.remove("change");
    hamburgerMenu.classList.remove("change");
    navItems.classList.remove("open");
    img.classList.remove("close");
    container.classList.remove("close");
    footer.classList.remove("close");
  }
});

nametag.addEventListener("click", () => {
  nametag.classList.toggle("change");
  hamburgerMenu.classList.toggle("change");
  navItems.classList.toggle("open");
  if (img) {
    img.classList.toggle("close");
  }
  if (container) {
    container.classList.toggle("close");
  }
  if (footer) {
    footer.classList.toggle("close");
  }
});