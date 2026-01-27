export const productCard = (product) => {
  return `
    <article class="product-card ${product.onSale ? 'product-card--sale' : ''}">
      ${product.onSale ? '<div class="product-card__badge">Sale</div>' : ''}
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-card__image"
      >
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__tagline">${product.availability}</p>
      <div class="product-card__price">
        <span class="product-card__price-current">
          $${product.price}
        </span>
        ${
          product.originalPrice
            ? `<span class="product-card__price-old">$${product.originalPrice}</span>`
            : ''
        }
      </div>
      ${
        product.onSale
          ? '<p class="product-card__note">Get 20% Off in App</p>'
          : ''
      }
    </article>
  `;
};
