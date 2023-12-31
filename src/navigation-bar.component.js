class NavigationBar extends HTMLElement {
  #LINKS = [
    { href: "/about", text: "About" },
    { href: "/search", text: "Search" },
  ];
  constructor() {
    super();
    this.renderTemplate();
    this.setupHomeLink();
    this.renderLinks();
  }
  renderTemplate() {
    const template = document.getElementById("navigation-bar-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
  setupHomeLink() {
    const homeLink = this.querySelector("h3");
    homeLink.innerHTML += `<span>${config.title}</span>`;
    if (homeLink) {
      homeLink.addEventListener("click", (event) => {
        event.preventDefault();
        if (location.pathname !== "/") {
          router.go("/");
        }
      });
    }
  }
  renderLinks() {
    const ulElement = this.querySelector("ul");
    this.#LINKS.filter((link) =>
      config.showAboutPage ? true : link.href !== "/about",
    ).forEach((link) => {
      const liElement = this.createLinkElement(link);
      ulElement.appendChild(liElement);
    });
  }
  createLinkElement(link) {
    const liElement = document.createElement("li");
    liElement.innerHTML = link.text;
    liElement.classList.add("navigation-bar__link");
    if (location.pathname === link.href) {
      liElement.classList.add("navigation-bar__link--active");
    }
    liElement.addEventListener("click", (event) => {
      event.preventDefault();
      if (location.pathname !== link.href) {
        router.go(link.href);
      }
    });
    return liElement;
  }
}

window.customElements.define("navigation-bar", NavigationBar);
