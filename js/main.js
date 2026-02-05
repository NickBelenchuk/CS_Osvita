import { products } from '../data/products.js';
import { productCard } from './productCard.js';
import { loadBurgerMenu } from './burger.js';

document.addEventListener('DOMContentLoaded', () => {
  loadBurgerMenu();

  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  const tabs = document.querySelectorAll('.filters__category[data-category]');
  const searchInput = document.getElementById('searchInput');
  const priceSelect = document.getElementById('priceSelect');
  const sortSelect = document.getElementById('sortSelect');

  const state = {
    category: 'beverages',
    search: '',
    price: 'all',
    sort: 'best-selling',
  };
  
  // const state = {};

  const normalize = (str) => str.toLowerCase().trim();

  const applyFilters = () => {
    let result = [...products];

    result = result.filter(p => p.category === state.category);

    if (state.search) {
      const q = normalize(state.search);
      result = result.filter(p =>
        normalize(p.name).includes(q)
      );
    }

    if (state.price === 'under-10') {
      result = result.filter(p => p.price < 10);
    } else if (state.price === '10-20') {
      result = result.filter(p => p.price >= 10 && p.price <= 20);
    } else if (state.price === '20-plus') {
      result = result.filter(p => p.price > 20);
    }

    if (state.sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (state.sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (state.sort === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  };

  const renderProducts = () => {
    const filtered = applyFilters();
    productsGrid.innerHTML = filtered.map(productCard).join('');
  };

  renderProducts();

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.category = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('filters__category--active'));
      tab.classList.add('filters__category--active');

      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      renderProducts();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      state.price = e.target.value;
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }
});
