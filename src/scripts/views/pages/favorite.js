import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/restaurant-item';
import createErrorView from '../components/error-view';

const Favorite = {
  async render() {
    return `
      <div class="container content restaurant">
        <h2 class="section-title">Your Favorited Restaurant</h2>
        <loading-item></loading-item>
        <div id="favorites" class="restaurant-list ">
 
        </div>
        <div class="favorite-empty-image">
          <div class="favorite-empty">
            <img src="hungry.gif" />
            <h1>You haven't added a favorite restaurant yet</h1>
          </div>
        </div> 
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('loading-item');
    const favoritesContainer = document.querySelector('#favorites');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const favoriteEmpty = document.querySelector('.favorite-empty-image');
      loading.style.display = 'none';

      if (restaurants.length > 0) {
        favoriteEmpty.style.display = 'none';

        restaurants.forEach((restaurant) => {
          const favoriteItemElement = document.createElement('restaurant-item');
          favoriteItemElement.restaurant = restaurant;
          favoritesContainer.appendChild(favoriteItemElement);
        });
      } else {
        favoriteEmpty.style.display = 'block';
      }
    } catch (error) {
      favoritesContainer.innerHTML = createErrorView(error.message);
    }
  },
};

export default Favorite;
