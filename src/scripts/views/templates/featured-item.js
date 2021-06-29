import CONFIG from '../../globals/config';

class FeaturedItem extends HTMLElement {
  set featured(featured) {
    this._featured = featured;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="featured-item" tabindex="0">
      <img
        class="featured-item__thumbnail"
        src=${CONFIG.BASE_IMAGE_URL}/large/${this._featured.pictureId}
        alt=${this._featured.name}
        aria-hidden="true"
      />
      <div class="featured-item__content">
        <div class="featured-item__info">
          <p class="featured-item__city" aria-label="from ${this._featured.city}">
            <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i
            >${this._featured.city}
          </p>
          <p class="featured-item__rating" aria-label="rating ${this._featured.rating}">
            <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._featured.rating}
          </p>
        </div>
        <h1 class="featured-item__title" aria-label="restaurant's name is ${this._featured.name}">${this._featured.name}</h1>
        <p class="featured-item__description">
          ${this._featured.description}
        </p>
      </div>
    </article>
      `;
  }
}

customElements.define('featured-item', FeaturedItem);
