const router = {
  init: () => {
    window.addEventListener("popstate", (event) => {
      router.go(event.state.route, false);
    });

    router.go(location.pathname + location.search);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    if (route === '/') {
      pageElement = document.createElement("home-page")
    } else if (route === '/404') {
      pageElement = document.createElement("not-found-page");
    } else if (route === '/about') {
      pageElement = config.showAboutPage ? document.createElement("about-page") : null;
    } else if (route.startsWith('/search')) {
      pageElement = document.createElement("search-page");
    } else if (route.startsWith("/article-")) {
      const articleId = route.split("-")[1];
      const foundArticle = app.articles.find((article) => article.id === Number(articleId));

      if (foundArticle) {
        pageElement = document.createElement("article-page");
        pageElement.dataset.articleId = articleId;
      }
    }

    if (!pageElement) {
      pageElement = document.createElement("not-found-page");
    }

    if (pageElement) {
      const rootElement = document.getElementById("root")
      rootElement.innerHTML = "";
      rootElement.appendChild(pageElement);

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  },
  back: () => {
    history.back();

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  },
};
