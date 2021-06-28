import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import List from '../templates/components/container/list';

import '../templates/components/items/about-item';
import '../templates/components/items/featured-item';
import '../templates/components/items/product-item';

import { aboutData, featuredData } from '../data/home';
import data from '../data/DATA.json';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// // Render about list item
// const aboutEL = document.querySelector('.about-list');
// const aboutList = new List(aboutEL, 'about-item', aboutData);
// aboutList.render();

// // Render Featured list item
// const featuredEl = document.querySelector('.featured-list');
// const featuredList = new List(featuredEl, 'featured-item', featuredData);
// featuredList.render();

// // Render Restaurant list item
// const productData = data.restaurants;
// const productEl = document.querySelector('.product-list');
// const productList = new List(productEl, 'product-item', productData);
// productList.render();
