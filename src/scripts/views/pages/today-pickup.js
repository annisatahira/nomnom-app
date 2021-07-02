import RestaurantDBSource from '../../data/restaurantdb-source';
import '../templates/featured-item';

const TodayPickup = {
  async render() {
    return `
      <hero-item 
          src="images/heros/hero-image_4.jpg"
          alt="NomNom Today Hero Image"
          title="NomNom Today"
          subtitle="Find Best Restaurant for Eat Today"
        ></hero-item>
        <div class="container">
          <div class="today-container">
            <h1 class="today-title">NomNom's Today Pickup</h1>
              <div class="loading">
                <img src="loading.gif" />
              </div>
            <div id="today-list" class="today-restaurant">
            </div>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    const todayContainer = document.querySelector('#today-list');

    loading.style.display = 'block';
    const restaurants = await RestaurantDBSource.allRestaurant();
    const todayList = await restaurants.slice(9, 20);
    loading.style.display = 'none';
    todayList.forEach((restaurant) => {
      const todayItemElement = document.createElement('featured-item');
      todayItemElement.featured = restaurant;
      todayContainer.appendChild(todayItemElement);
    });
  },
};

export default TodayPickup;
