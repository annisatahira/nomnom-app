import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurantdb-source';
import '../templates/detail-item';
import '../templates/review-item';

const Detail = {
  async render() {
    return `
        <div class="container content">
          <section id="detail">
          </section>
          <section class="review-container">
            <div class="review-write__content">
              <h1 class="review-write__title">Rate your dining Experience</h1>
              <form id="reviewForm">
                <label for="name">Nama</label>
                <input id="name" name="name" placeholder="Name" type="text" class="review-write__name" />
                <label for="review">Review</label>
                <textarea type="text" id="review" name="rewiew" placeholder="Write your review here.." class="review-write__container"></textarea>
                <button type="submit" class="review-write__btn">Send</button>
              </form>
            </div>
            <hr class="review-divider"/>
            <div id="reviews">
            </div>
          </section>
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

    // review
    const reviewContainer = document.querySelector('#reviews');
    detail.restaurant.customerReviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      reviewContainer.appendChild(reviewItemElement);
    });

    const name = document.querySelector('#name');
    const userReview = document.querySelector('#review');
    const submitReview = document.querySelector('#reviewForm');
    submitReview.addEventListener('submit', async (e) => {
      e.preventDefault();
      const review = {
        id: url.id,
        name: name.value,
        review: userReview.value,
      };

      await RestaurantDBSource.postReview(review);
      name.value = '';
      userReview.value = '';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  },
};

export default Detail;
