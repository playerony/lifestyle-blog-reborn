class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.renderTemplate();
    this.renderContent();
  }
  renderTemplate() {
    const template = document.getElementById("page-footer-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  renderContent() {
    const currentYear = new Date().getFullYear();
    const includeSince = config.since && config.since < currentYear;
    const footerYear = includeSince
      ? `${config.since} - ${currentYear}`
      : currentYear;
    this.querySelector("p").innerHTML = `@ <a href="${config.socialLink}" target="_blank">${config.author}</a> ${footerYear}`;
  }
}

window.customElements.define("page-footer", PageFooter);
