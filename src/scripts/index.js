import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const drawerMobileElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");

drawerMobileElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});
