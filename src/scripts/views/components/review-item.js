class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="review-content">
            <div class="review-info">
                <h1 class="review-info__name">${this._review.name}</h1>
                <span class="review-info__date">${this._review.date}</span>
            </div>
            <p>${this._review.review}</p>
            <hr class="review-divider"/>
        </div>
        `;
  }
}

customElements.define('review-item', ReviewItem);
