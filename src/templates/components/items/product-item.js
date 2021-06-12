class ProductItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="product-item" tabindex="0">
        <img
          class="product-item__thumbnail"
          src=${this._data.pictureId}
          alt=${this._data.name}
          aria-hidden="true"
        />
        <div class="product-item__content">
          <h1 class="product-item__title" aria-label="restaurant's name is ${this._data.name}">${this._data.name}</h1>
          <div>
            <div class="product-item__info">
              <p class="product-item__city" aria-label="from ${this._data.city}">
                <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i>${this._data.city}
              </p>
              <p class="product-item__rating" aria-label="rating ${this._data.rating}">
                <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._data.rating}
              </p>
            </div>
            <p class="product-item__description">
              ${this._data.description}
            </p>
          </div>
        </div>
      </article>
      `;
  }
}

customElements.define("product-item", ProductItem);
