import { products } from '../data/products.js';
import { productCard } from './productCard.js';
import { loadBurgerMenu } from './burger.js';
import { initFilters } from './filters.js';

document.addEventListener('DOMContentLoaded', () => {
  loadBurgerMenu();
  initFilters({ products, productCard });
});