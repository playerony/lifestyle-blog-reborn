const fs = require('fs').promises;
const showdown = require('showdown');
const blogConfig = require('./blog.config.js');
const blogArticles = require('./blog.articles.js');
const minifyHtml = require('html-minifier').minify;

const converter = new showdown.Converter();

const articles = blogArticles.map((article, index) => ({
  id: index + 1,
  ...article,
}));

const generateArticleTemplates = async () => {
  const articlesByFileName = articles.reduce((acc, article, index) => {
    const key = article.fileName;

    if (!acc[key]) {
      acc[key] = [article];
    } else {
      acc[key].push(article);
    }

    return acc;
  }, {});

  const indexHtmlTemplate = await fs.readFile('./src/index.template.html', 'utf8');
  let templatesToAdd = '';

  const templateFiles = await fs.readdir('./templates');

  await Promise.all(templateFiles.map(async (file) => {
    const template = await fs.readFile(`./templates/${file}`, 'utf8');
    const html = converter.makeHtml(template);
    const articleDetails = articlesByFileName[file];

    if (!articleDetails) {
      templatesToAdd += `<template id="about-page-generated">${html}</template>`;
      return;
    }

    articleDetails.forEach((article) => {
      templatesToAdd += `<template id="article-${article.id}-page-generated">${html}</template>`;
    });
  }));

  const result =
    indexHtmlTemplate
      .replace('%custom_templates%', templatesToAdd)
      .replace('%google_analytics_head%',
        blogConfig.measurementId ? `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${blogConfig.measurementId}');</script>
        <!-- End Google Tag Manager -->` : '')
      .replace('%google_analytics_body%',
        blogConfig.measurementId ? `
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${blogConfig.measurementId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->` : '');

  await fs.writeFile('./index.html', result);
}

const mimifyIndexHtml = async () => {
  const indexHtml = await fs.readFile('./index.html', 'utf8');
  const minifiedHtml = minifyHtml(indexHtml, {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
  });

  await fs.writeFile('./index.html', minifiedHtml);
}

const mergeAllJavaScriptFiles = async () => {
  const files = await fs.readdir('./src');
  const jsFiles = files.filter((file) => file.endsWith('.js'));
  const blogConfigFile = await fs.readFile('./blog.config.js');
  const blogArticlesFile = await fs.readFile('./blog.articles.js');
  const swRegisterFile = await fs.readFile('./sw-register.js');

  let result = `${blogConfigFile} ${blogArticlesFile} ${swRegisterFile}`

  result += await jsFiles.reduce(async (asyncAcc, file) => {
    const acc = await asyncAcc;
    const fileContent = await fs.readFile(`./src/${file}`, 'utf8');

    return acc + fileContent;
  }, Promise.resolve(''));

  await fs.writeFile('./index.js', result);
}

const minifyIndexJavaScript = async () => {
  const { minify: minifyJavaScript } = await import('minify');
  const indexJavaScript = await fs.readFile('./index.js', 'utf8');
  const minifiedJavaScript = await minifyJavaScript.js(indexJavaScript);

  await fs.writeFile('./index.js', minifiedJavaScript);
}

const generateWebmanifest = async () => {
  const webmanifestTemplate = await fs.readFile('./src/webmanifest.template.json', 'utf8');
  const result = webmanifestTemplate.replace(/%title%/g, blogConfig.title).replace(/%description%/g, blogConfig.description);

  await fs.writeFile('./app.webmanifest', result);
}

const generateSitemap = async () => {
  let result = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  result += `<url><loc>${blogConfig.link}/</loc></url>`;
  result += `<url><loc>${blogConfig.link}/about</loc></url>`;
  result += `<url><loc>${blogConfig.link}/search</loc></url>`;
  const articleUrls = articles.map((article) => `<url><loc>${blogConfig.link}/article-${article.id}</loc></url>`).join('');
  result += `${articleUrls}</urlset>`;

  await fs.writeFile('./sitemap.xml', result);
}

const generateRobotsTxt = async () => {
  const result = `User-agent: *\nAllow: /\n\nSitemap: ${blogConfig.link}/sitemap.xml\n`;

  await fs.writeFile('./robots.txt', result);
}

(async () => {
  await generateArticleTemplates();
  await mimifyIndexHtml();
  await mergeAllJavaScriptFiles();
  await minifyIndexJavaScript();
  await generateWebmanifest();
  await generateSitemap();
  await generateRobotsTxt();
})();
