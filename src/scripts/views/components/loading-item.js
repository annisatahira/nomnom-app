import CONFIG from '../../globals/config';

class LoadingItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loading">
        <img src=${CONFIG.LOADING_ICON} />
      </div>
      `;
  }
}

customElements.define('loading-item', LoadingItem);
