import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="restaurant-item" tabindex="0">
          <img
            class="restaurant-item__thumbnail"
            src=${CONFIG.BASE_IMAGE_URL}/medium/${this._restaurant.pictureId}
            alt=${this._restaurant.name}
            aria-hidden="true"
          />
          <div class="restaurant-item__content">
            <h1 class="restaurant-item__title" aria-label="restaurant's name is ${this._restaurant.name}">
              <a href="${`/#/detail/${this._restaurant.id}`}">${this._restaurant.name}</a>
            </h1>
            <div>
              <div class="restaurant-item__info">
                <p class="restaurant-item__city" aria-label="from ${this._restaurant.city}">
                  <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i>${this._restaurant.city}
                </p>
                <p class="restaurant-item__rating" aria-label="rating ${this._restaurant.rating}">
                  <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._restaurant.rating}
                </p>
              </div>
              <p class="restaurant-item__description">
                ${this._restaurant.description}
              </p>
            </div>
          </div>
        </article>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
