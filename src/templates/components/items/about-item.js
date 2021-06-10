class AboutItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure class="about-item" tabindex="0"  aria-label="our value is ${this._data.title}">
            <img src="${this._data.image}" alt=${this._data.title} />
            <figcaption class="about-item__title">${this._data.title}</figcaption>
        </figure>
      `;
  }
}

customElements.define("about-item", AboutItem);
