const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateObject = new Date(inputDate);
  return dateObject.toLocaleDateString(config.lang, options);
};

const transformArticles = (articles) => {
  const mappedArticles = articles.map(({ hidden, ...restParams }, index) => ({
    ...restParams,
    id: index + 1,
    tags: (restParams.tags || []).sort(),
    originalCreatedAt: restParams.createdAt,
    createdAt: formatDate(restParams.createdAt),
  }));

  return config.sortArticlesByDate
    ? mappedArticles.sort((a, b) => new Date(b.originalCreatedAt) - new Date(a.originalCreatedAt))
    : mappedArticles;
};

const getAvailableTags = (articles) => {
  const tagCounts = articles.reduce((counts, article) => {
    article.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
  }, {});

  const tagArray = Object.keys(tagCounts).map(tag => ({ name: tag, count: tagCounts[tag] }));
  return tagArray.sort((a, b) => a.name.localeCompare(b.name));
};

window.app = {
  articles: [],
  availableTags: [],
};

const main = async () => {
  document.title = config.title;

  app.articles = transformArticles(articles);
  app.availableTags = getAvailableTags(app.articles);

  router.init();
};

window.addEventListener("DOMContentLoaded", main);
