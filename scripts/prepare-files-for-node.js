const fs = require('fs');

const loadedBlogArticles = fs.readFileSync('./blog.articles.js', 'utf8');
fs.writeFileSync('./scripts/blog.articles.js', loadedBlogArticles + '\nmodule.exports = articles;');

const loadedBlogConfig = fs.readFileSync('./blog.config.js', 'utf8');
fs.writeFileSync('./scripts/blog.config.js', loadedBlogConfig + '\nmodule.exports = config;');
