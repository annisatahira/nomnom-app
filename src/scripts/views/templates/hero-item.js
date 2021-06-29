class HeroItem extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.title = this.getAttribute('title') || null;
    this.link = this.getAttribute('link') || null;
    this.subtitle = this.getAttribute('subtitle') || null;
    this.ariaLabel = this.getAttribute('ariaLabel') || null;

    this.innerHTML = `
    <div class="hero">
        <div class="hero__figure">
            <img src=${this.src} alt=${this.alt}/>
            <div class="hero-inner">
                <span class="hero-inner__title">${this.title}</span>
                <h1 class="hero-inner__subtitle">${this.subtitle}</h1>
                <a
                href=${this.link}
                class="hero-inner__link"
                aria-label=${this.ariaLabel}
                >Check This Out!</a
                >
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define('hero-item', HeroItem);
