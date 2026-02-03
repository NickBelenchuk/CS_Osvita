import { products } from '../data/products.js';
import { productCard } from './productCard.js';
import { loadBurgerMenu } from "./burger.js";



document.addEventListener('DOMContentLoaded', () => {

  loadBurgerMenu();

  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  const tabs = document.querySelectorAll('.filters__category[data-category]');

  let activeCategory = 'beverages';

  const renderProducts = () => {
    productsGrid.innerHTML = '';

    const filteredProducts = products.filter(
      product => product.category === activeCategory
    );

    filteredProducts.forEach(product => {
      productsGrid.insertAdjacentHTML(
        'beforeend',
        productCard(product)
      );
    });
  }
  
  renderProducts();

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      if (!category) return;

      activeCategory = category;

      tabs.forEach(t => t.classList.remove('filters__category--active'));
      tab.classList.add('filters__category--active');

      renderProducts();
    });
  });
});
