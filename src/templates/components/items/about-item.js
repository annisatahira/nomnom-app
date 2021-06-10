class AboutItem extends HTMLElement {
  set item(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure class="about-item">
            <img src="${this._data.image}" />
            <figcaption class="about-item__title">${this._data.title}</figcaption>
        </figure>
      `;
  }
}

customElements.define("about-item", AboutItem);
