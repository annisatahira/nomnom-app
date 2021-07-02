import { aboutData } from '../../data/home';
import RestaurantDBSource from '../../data/restaurantdb-source';
import '../components/about-item';
import '../components/featured-item';
import '../components/restaurant-item';
import CONFIG from '../../globals/config';
import arraySclicer from '../../utils/slice-helper';

const Home = {
  async render() {
    return `
    <div>
      <hero-item 
        src=${CONFIG.BANNER_HOME_IMAGE}
        alt="NomNom Today Hero Image"
        title="NomNom Today"
        subtitle="Find Recommended Restaurant Here"
        link="#recommendation"
        ariaLabel="find recommended restaurant by clicking here"
      ></hero-item>
      <section class="about">
        <div class="container">
          <h1 class="section-title about__title">Our Value</h1>
        </div>
        <article>
          <div class="container">
            <div id="about-list"></div>
          </div>
        </article>
      </section>
      <section class="featured">
          <div class="container">
            <h1 class="section-title featured__title">Today Pickup</h1>
            <div id="featured-list" class="featured-list"></div>
          </div>
        </section>
      <section id="restaurant" class="restaurant container">
        <h1 class="section-title">Restaurant</h1>
        <loading-item></loading-item>
        <div id="restaurants" class="restaurant-list"></div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    // render about list
    const aboutContainer = document.querySelector('#about-list');

    aboutData.forEach((about) => {
      const aboutItemElement = document.createElement('about-item');
      aboutItemElement.about = about;
      aboutContainer.appendChild(aboutItemElement);
    });

    // render restaurant list
    const loading = document.querySelector('loading-item');
    const restaurantList = await RestaurantDBSource.allRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    loading.style.display = 'none';

    restaurantList.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantItemElement);
    });

    // render featured restaurant
    const featuredList = arraySclicer({
      arrData: restaurantList,
      sliceFrom: 2,
      sliceTo: 5,
    });

    const featuredContainer = document.querySelector('#featured-list');

    featuredList.forEach((restaurant) => {
      const featuredItemElement = document.createElement('featured-item');
      featuredItemElement.featured = restaurant;
      featuredContainer.appendChild(featuredItemElement);
    });
  },
};

export default Home;
