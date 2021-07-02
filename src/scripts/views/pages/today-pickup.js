import RestaurantDBSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
import arraySclicer from '../../utils/slice-helper';
import '../components/featured-item';
import createErrorView from '../components/error-view';

const TodayPickup = {
  async render() {
    return `
      <hero-item 
          src=${CONFIG.BANNER_TODAY_PICKUP_IMAGE}
          alt="NomNom Today Hero Image"
          title="NomNom Today"
          subtitle="Find Best Restaurant for Eat Today"
        ></hero-item>
        <div class="container">
          <div class="today-container">
            <h1 class="today-title">NomNom's Today Pickup</h1>
              <loading-item></loading-item>
            <div id="today-list" class="today-restaurant">
            </div>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('loading-item');
    const todayContainer = document.querySelector('#today-list');

    try {
      const restaurants = await RestaurantDBSource.allRestaurant();
      const todayList = arraySclicer({
        arrData: restaurants,
        sliceFrom: 9,
        sliceTo: 20,
      });
      loading.style.display = 'none';

      todayList.forEach((restaurant) => {
        const todayItemElement = document.createElement('featured-item');
        todayItemElement.featured = restaurant;
        todayContainer.appendChild(todayItemElement);
      });
    } catch (error) {
      todayContainer.innerHTML = createErrorView(error.message);
    }
  },
};

export default TodayPickup;
