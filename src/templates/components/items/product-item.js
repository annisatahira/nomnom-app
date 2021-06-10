class ProductItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="product-item">
        <img
          class="product-item__thumbnail"
          src=${this._data.pictureId}
        />
        <div class="product-item__description">
          <h1 class="product-item__title">${this._data.name}</h1>
          <div class="product-item__info">
            <p class="product-item__city">
              <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i
              >${this._data.city}
            </p>
            <p class="product-item__rating">
              <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._data.rating}
            </p>
          </div>
        </div>
      </article>
      `;
  }
}

customElements.define("product-item", ProductItem);
