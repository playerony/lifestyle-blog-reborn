class SearchPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderTemplate();
    this.setupInputEventListeners();
    this.renderTags();
    this.renderResults();
    applySeo({
      type: "website",
      title: "Search",
      locale: config.lang,
      author: config.author,
      keywords: config.keywords,
      url: `${config.link}/search`,
      description: config.description,
    });
  }
  renderTemplate() {
    const template = document.getElementById("search-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  setupInputEventListeners() {
    const tagFromQuery = this.getTagFromQuery();
    const searchedQuery = this.getSearchedQuery();
    const inputElement = this.querySelector("input");
    inputElement.addEventListener("input", (event) => {
      this.renderResults(event.target.value);
    });
    if (tagFromQuery) {
      inputElement.placeholder = `Search in #${tagFromQuery}`;
    }
    if (searchedQuery) {
      inputElement.value = searchedQuery;
    }
  }
  renderTags() {
    const tagsElement = this.querySelector("ul[class='search-page__tags']");
    app.availableTags.sort((a, b) => b.count - a.count).forEach((tag) => {
      const tagElement = this.createTagElement(tag);
      tagsElement.appendChild(tagElement);
    });
  }
  createTagElement(tag) {
    const tagElement = document.createElement("li");
    tagElement.innerHTML = `${tag.name} (${tag.count})`;
    tagElement.classList.add("search-page__tag");
    const tagFromQuery = this.getTagFromQuery();
    if (tag.name === tagFromQuery) {
      tagElement.classList.add("search-page__tag--active");
    }
    tagElement.addEventListener("click", (event) => {
      event.preventDefault();
      const inputElement = this.querySelector("input");
      const queryParam = inputElement.value || "";
      router.go(
        tag.name === tagFromQuery
          ? `/search`
          : `/search?tag=${tag.name}${
              queryParam ? `&query=${queryParam}` : ""
            }`,
      );
    });
    return tagElement;
  }
  renderResults(inputValue = this.getSearchedQuery()) {
    const tagFromQuery = this.getTagFromQuery();
    const resultsElement = this.querySelector(
      "div[class='search-page__results']",
    );
    resultsElement.innerHTML = "";
    const filteredArticles = app.articles
      .filter((article) => !tagFromQuery || article.tags.includes(tagFromQuery))
      .filter(
        (article) =>
          !inputValue ||
          article.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          article.description.toLowerCase().includes(inputValue.toLowerCase()),
      );
    if (filteredArticles.length === 0) {
      resultsElement.innerHTML =
        '<h5 class="search-page__no-results">No results found</h5>';
      return;
    }
    filteredArticles.forEach((article) => {
      this.appendArticleCardElement(resultsElement, article);
    });
  }
  appendArticleCardElement(parentElement, article) {
    const articleCardElement = document.createElement("article-card");
    articleCardElement.dataset.articleId = article.id;
    parentElement.appendChild(articleCardElement);
  }
  getTagFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("tag");
  }
  getSearchedQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("query");
  }
}

window.customElements.define("search-page", SearchPage);
