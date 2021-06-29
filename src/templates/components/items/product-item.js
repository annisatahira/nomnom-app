class ProductItem extends HTMLElement {
  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="product-item" tabindex="0">
        <img
          class="product-item__thumbnail"
          src=${this._product.pictureId}
          alt=${this._product.name}
          aria-hidden="true"
        />
        <div class="product-item__content">
          <h1 class="product-item__title" aria-label="restaurant's name is ${this._product.name}">${this._product.name}</h1>
          <div>
            <div class="product-item__info">
              <p class="product-item__city" aria-label="from ${this._product.city}">
                <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i>${this._product.city}
              </p>
              <p class="product-item__rating" aria-label="rating ${this._product.rating}">
                <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._product.rating}
              </p>
            </div>
            <p class="product-item__description">
              test ${this._product.description}
            </p>
          </div>
        </div>
      </article>
      `;
  }
}

customElements.define('product-item', ProductItem);
