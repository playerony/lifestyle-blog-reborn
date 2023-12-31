class ArticlePage extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    this.renderTemplate();
    const articleId = JSON.parse(this.dataset.articleId);
    const foundArticle = app.articles.find(
      (article) => article.id === articleId,
    );
    this.renderArticleContent(foundArticle);
    this.renderMetaData(foundArticle);
    applySeo({
      type: "article",
      locale: config.lang,
      author: config.author,
      keywords: config.keywords,
      title: foundArticle.title,
      description: foundArticle.description,
      publishedTime: foundArticle.originalCreatedAt,
      url: `${config.link}/article-${foundArticle.id}`,
    });
  }
  renderTemplate() {
    const template = document.getElementById("article-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  renderArticleContent(foundArticle) {
    const generatedHtml = document.getElementById(
      `article-${foundArticle.id}-page-generated`,
    );
    const content = generatedHtml.content.cloneNode(true);
    this.querySelector("article").appendChild(content);
  }
  renderMetaData(foundArticle) {
    this.querySelector("h1").innerHTML = foundArticle.title;
    this.querySelector("time").innerHTML = foundArticle.createdAt;
    this.querySelector("span[class='article__author']").innerHTML =
      `<a href="${config.socialLink}" target="_blank">${config.author}</a>`;
    const tagsElement = this.querySelector("div[class='article__tags']");
    foundArticle.tags.forEach((tag) => {
      const tagElement = this.createTagElement(tag);
      tagsElement.appendChild(tagElement);
    });
  }
  createTagElement(tag) {
    const tagElement = document.createElement("span");
    tagElement.innerHTML = tag;
    tagElement.classList.add("article__tag");
    tagElement.addEventListener("click", (event) => {
      event.preventDefault();
      router.go(`/search?tag=${tag}`);
    });
    return tagElement;
  }
}

window.customElements.define("article-page", ArticlePage);
