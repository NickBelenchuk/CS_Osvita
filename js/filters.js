export const initFilters = ({ products, productCard }) => {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const tabs = document.querySelectorAll('.filters__category[data-category]');
    const searchInput = document.getElementById('searchInput');
    const priceSelect = document.getElementById('priceSelect');
    const sortSelect = document.getElementById('sortSelect');
    const clearButtons = document.querySelectorAll('.filters__clear[data-clear]');

    const state = {
        category: 'beverages',
        search: '',
        price: 'all',
        sort: 'best-selling',
    };

    const normalize = (str) => str.toLowerCase().trim();

    const applyFilters = () => {
        let result = [...products];

        result = result.filter(product => product.category === state.category);

        if (state.search !== '') {
            const query = normalize(state.search);
            result = result.filter(product =>
                normalize(product.name).includes(query)
            );
        }

        if (state.price === 'under-10') {
            result = result.filter(product => product.price < 10);
        } else if (state.price === '10-20') {
            result = result.filter(product => product.price >= 10 && product.price <= 20);
        } else if (state.price === '20-plus') {
            result = result.filter(product => product.price > 20);
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
        const filteredProducts = applyFilters();
        productsGrid.innerHTML = filteredProducts
            .map(product => productCard(product))
            .join('');
    };

    const syncClearButtons = () => {
        clearButtons.forEach(button => {
            const type = button.dataset.clear;
            let isActive = false;

            if (type === 'search') {
                isActive = state.search !== '';
            } else if (type === 'price') {
                isActive = state.price !== 'all';
            } else if (type === 'sort') {
                isActive = state.sort !== 'best-selling';
            }

            button.classList.toggle('filters__clear--active', isActive);
        });
    };

    const updateUI = () => {
        renderProducts();
        syncClearButtons();
    };

    updateUI();

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            state.category = tab.dataset.category;

            tabs.forEach(t => t.classList.remove('filters__category--active'));
            tab.classList.add('filters__category--active');

            updateUI();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.search = e.target.value;
            updateUI();
        });
    }

    if (priceSelect) {
        priceSelect.addEventListener('change', (e) => {
            state.price = e.target.value;
            updateUI();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sort = e.target.value;
            updateUI();
        });
    }

    clearButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.clear;

            if (type === 'search') {
                state.search = '';
                if (searchInput) searchInput.value = '';
            } else if (type === 'price') {
                state.price = 'all';
                if (priceSelect) priceSelect.value = 'all';
            } else if (type === 'sort') {
                state.sort = 'best-selling';
                if (sortSelect) sortSelect.value = 'best-selling';
            }

            updateUI();
        });
    });
};
