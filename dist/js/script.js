const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector("ion-icon[name='menu-outline']");

function onToggleMenu() {
  const isMenuOpen = navLinks.classList.toggle("top-[14%]");

  if (menuIcon) {
    menuIcon.setAttribute("name", isMenuOpen ? "close-outline" : "menu-outline");
  }

  if (isMenuOpen) {
    navLinks.style.top = "14%";
  } else {
    navLinks.style.top = "-100%";
    if (menuIcon) {
      menuIcon.setAttribute("name", "menu-outline");
    }
  }
}