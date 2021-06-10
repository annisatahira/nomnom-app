import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import List from "../templates/components/container/list.js";

import "../templates/components/items/about-item.js";
import "../templates/components/items/featured-item.js";
import "../templates/components/items/product-item.js";

import { aboutData, featuredData } from "../data/home.js";
import data from "../data/DATA.json";

const drawerMobileElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");

drawerMobileElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

// Render about list item
const aboutEL = document.querySelector(".about-list");
const aboutList = new List(aboutEL, "about-item", aboutData);
aboutList.render();

// Render Featured list item
const featuredEl = document.querySelector(".featured-list");
const featuredList = new List(featuredEl, "featured-item", featuredData);
featuredList.render();

// Render Restaurant list item
const productData = data.restaurants;
const productEl = document.querySelector(".product-list");
const productList = new List(productEl, "product-item", productData);
productList.render();
