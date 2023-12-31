const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateObject = new Date(inputDate);
  return dateObject.toLocaleDateString("en-US", options);
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

const addGoogleTagManager = () => {
  if (!config.measurementId) {
    return;
  }

  document.head.innerHTML = `
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${config.measurementId}');</script>
  ` + document.head.innerHTML;

  document.body.innerHTML = `
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${config.measurementId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  ` + document.body.innerHTML;
};

window.app = {
  articles: [],
  availableTags: [],
};

const main = async () => {
  document.title = config.title;
  addGoogleTagManager();

  app.articles = transformArticles(articles);
  app.availableTags = getAvailableTags(app.articles);

  router.init();
};

window.addEventListener("DOMContentLoaded", main);
