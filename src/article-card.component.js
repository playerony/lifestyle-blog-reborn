class ArticleCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderTemplate();
    const articleId = JSON.parse(this.dataset.articleId);
    const foundArticle = app.articles.find(
      (article) => article.id === articleId,
    );
    this.renderContent(foundArticle);
    this.setupClickEvent(foundArticle);
  }
  renderTemplate() {
    const template = document.getElementById("article-card-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.style.width = "100%";
  }
  renderContent(foundArticle) {
    this.querySelector("h3").innerHTML = foundArticle.title;
    this.querySelector("p").innerHTML = foundArticle.description;
    this.querySelector("time").innerHTML = foundArticle.createdAt;
  }
  setupClickEvent(foundArticle) {
    this.querySelector("article").onclick = (event) => {
      event.preventDefault();
      router.go(`/article-${foundArticle.id}`);
    };
  }
}

window.customElements.define("article-card", ArticleCard);
