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
            <div id="today-list" class="today-restaurant"></div>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const todayContainer = document.querySelector('#today-list');

    const restaurants = await RestaurantDBSource.allRestaurant();
    const todayList = restaurants.slice(9, 20);

    todayList.forEach((restaurant) => {
      const todayItemElement = document.createElement('featured-item');
      todayItemElement.featured = restaurant;
      todayContainer.appendChild(todayItemElement);
    });
  },
};

export default TodayPickup;
