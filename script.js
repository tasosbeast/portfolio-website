function toggleMenu() {
  const menu = document.querySelector(".menu_links");
  const hamburgerIcon = document.querySelector(".hamburger_icon");
  menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
