class AboutPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderTemplate();
    this.renderAboutContent();
    applySeo({
      title: "About",
      type: "article",
      locale: config.lang,
      author: config.author,
      keywords: config.keywords,
      url: `${config.link}/about`,
      publishedTime: "2137-01-01",
      description: config.description,
    });
  }
  renderTemplate() {
    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  renderAboutContent() {
    const template = document.getElementById("about-page-generated");
    const content = template.content.cloneNode(true);
    this.querySelector("article").appendChild(content);
  }
}

window.customElements.define("about-page", AboutPage);
