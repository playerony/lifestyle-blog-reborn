class ArticleFooter extends HTMLElement {
  constructor() {
    super();
    this.renderTemplate();
    this.setupEventListeners();
    this.style.width = "100%";
  }
  renderTemplate() {
    const template = document.getElementById("article-footer-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  setupEventListeners() {
    this.querySelectorAll("button").forEach((button) => {
      if (button.innerHTML.endsWith("Back")) {
        return button.addEventListener("click", () => router.back());
      }
      button.addEventListener("click", () => this.smoothScrollTop());
    });
  }
  smoothScrollTop() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(() => this.smoothScrollTop());
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  }
}

window.customElements.define("article-footer", ArticleFooter);
