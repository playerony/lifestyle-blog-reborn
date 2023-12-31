class HomePage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderTemplate();
    this.renderArticleCards();
    applySeo({
      type: "website",
      url: config.link,
      withCanonical: true,
      title: config.title,
      locale: config.lang,
      author: config.author,
      keywords: config.keywords,
      description: config.description,
    });
  }
  renderTemplate() {
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  renderArticleCards() {
    const mainElement = this.querySelector("main");
    mainElement.innerHTML = "";
    app.articles.forEach((article) => {
      const articleCardElement = this.createArticleCardElement(article);
      mainElement.appendChild(articleCardElement);
    });
  }
  createArticleCardElement(article) {
    const articleCardElement = document.createElement("article-card");
    articleCardElement.dataset.articleId = article.id;
    return articleCardElement;
  }
}

window.customElements.define("home-page", HomePage);
