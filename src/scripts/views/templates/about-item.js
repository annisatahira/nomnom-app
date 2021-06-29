class AboutItem extends HTMLElement {
  set about(about) {
    this._about = about;
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure class="about-item" tabindex="0"  aria-label="our value is ${this._about.title}">
            <img src="${this._about.image}" alt=${this._about.title} />
            <figcaption class="about-item__title">${this._about.title}</figcaption>
        </figure>
      `;
  }
}

customElements.define('about-item', AboutItem);
