import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurantdb-source';
import '../templates/detail-item';

const Detail = {
  async render() {
    return `
        <div id="detail" class="container content">
          
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDBSource.detailRestaurant(url.id);
    console.log({ detail });
    const detailContainer = document.querySelector('#detail');
    const detailItemElement = document.createElement('detail-item');
    detailItemElement.detail = detail.restaurant;
    detailContainer.appendChild(detailItemElement);
  },
};

export default Detail;
