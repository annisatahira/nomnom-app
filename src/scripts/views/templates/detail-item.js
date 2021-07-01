import CONFIG from '../../globals/config';

class DetailItem extends HTMLElement {
  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="detail-content">
            <div class="detail-item__image">
                <img
                class="detail-item__thumbnail"
                src="${CONFIG.BASE_IMAGE_URL}/large/${this._detail.pictureId}"
                alt=""
                aria-hidden="true"
                />
                <p class="detail-item__rating" aria-label="rating ${this._detail.rating}">
                    <i class="fa fa-star fa-icon" aria-hidden="true"></i>${this._detail.rating}
                </p>
            </div>
            <div class="detail-item__content">
                <h1 class="detail-title">${this._detail.name}</h1>
                ${this._detail.categories.map((category) => `
                    <span class="detail-category">${category.name}</span>`).join(',')}
                    <div class="detail-item__info">
                        <p class="detail-item__city" aria-label="from ${this._detail.address}">
                            <i class="fa fa-map-marker fa-icon" aria-hidden="true"></i>${this._detail.address}, ${this._detail.city}
                        </p>
                    </div>
                    
                    <p class="detail-item__description">
                        ${this._detail.description}
                    </p>
            </div>
        </div>
        <div class="detail-content__menu">
            <div class="detail-item__menu">
                <h1 class="detail-title"><i class="fa fa-cutlery" aria-hidden="true"></i>Food</h1>
                <hr />
                <div>
                    <ul class="detail-item__menu-list">
                    ${this._detail.menus.foods.map((food) => `
                        <li>${food.name}</li>
                    `).join('')}
                    </ul>
                </div>
            </div>
            <div class="detail-item__menu">
                <h1 class="detail-title"><i class="fa fa-cutlery" aria-hidden="true"></i>Drink</h1>
                <hr />
                <div>
                    <ul class="detail-item__menu-list">
                    ${this._detail.menus.drinks.map((drinks) => `
                        <li>${drinks.name}</li>
                    `).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('detail-item', DetailItem);
