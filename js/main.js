import { products } from '../data/products.js';
import { productCard } from './productCard.js';
import { loadBurgerMenu } from "./burger.js";



document.addEventListener('DOMContentLoaded', () => {

  loadBurgerMenu();

  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  products.forEach(product => {
    productsGrid.insertAdjacentHTML(
  'beforeend',
  productCard(product)
  );
  });
});
