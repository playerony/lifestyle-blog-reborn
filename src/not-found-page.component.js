class NotFoundPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.getElementById("not-found-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

window.customElements.define("not-found-page", NotFoundPage);
