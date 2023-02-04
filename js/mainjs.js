/* 
  Abdullah Elshebrway: add fixed class on header when scrolling.
  and add white class on scroll, small screens.
 */
const header = document.querySelector("header");

fixheader();
window.addEventListener("scroll", fixheader);
window.addEventListener("resize", fixheader);
function fixheader() {
  addClassOn(window.scrollY > 0, header, "white", "fixed");
  addClassOn(window.innerWidth <= 991 || window.scrollY > 0, header, "white");
}

function addClassOn(condition, element, ...elClasses) {
  if (condition) {
    element.classList.add(...elClasses);
  } else {
    element.classList.remove(...elClasses);
  }
}
