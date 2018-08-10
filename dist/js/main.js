// =====================================================
// Select DOM items
// =====================================================

// get menu button
const menuBtn = document.querySelector(".menu-btn");
// get menu overlay
const menu = document.querySelector(".menu");
// get nav
const menuNav = document.querySelector(".menu-nav");
// get branding
const menuBranding = document.querySelector(".menu-branding");
// get nav list/item
const navItems = document.querySelectorAll(".nav-item");

// =====================================================
// Set inital state of menu (the overlay)
// =====================================================

// variable that reps if mean is open or closed, boolean
let showMenu = false;

// an event listener for when hamburger is clicked on
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // check the state of showMenu if it's false, the menu overlay
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    // forEach() is higher order array method
    // forEach item add show class
    navItems.forEach(item => item.classList.add("show"));
    // reset the Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    // forEach() is higher order array method
    // forEach item remove show class
    navItems.forEach(item => item.classList.remove("show"));
    // reset the Menu state back to original false
    showMenu = false;
  }
}
