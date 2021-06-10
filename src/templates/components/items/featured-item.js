class FeaturedItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="featured-item">
      <img
        class="featured-item__thumbnail"
        src=${this._data.pictureId}
        alt="${this._data.name}"
      />
      <div class="featured-item__content">
        <div class="featured-item__info">
          <p class="featured-item__city">
            <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i
            >${this._data.city}
          </p>
          <p class="featured-item__rating">
            <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._data.rating}
          </p>
        </div>
        <h1 class="featured-item__title">${this._data.name}</h1>
        <p class="featured-item__description">
          ${this._data.description}
        </p>
      </div>
    </article>
      `;
  }
}

customElements.define("featured-item", FeaturedItem);
