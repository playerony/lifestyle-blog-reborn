const fs = require("fs");
const path = require("path");
const blogConfig = require('./blog.config.js');

const IGNORED_FILES = [
  ".DS_Store",
  "LICENSE",
  "README.md",
  "scripts",
  "src",
  ".gitignore",
  "package.json",
  "vercel.json",
  "node_modules",
  "yarn.lock",
  "templates"
];

const URLS_TO_CACHE = [];

const addUrlsToCacheFromDirectory = (directory = '') =>
  fs.readdirSync(path.join(__dirname + "/../" + directory)).forEach((file) => {
    if (file.startsWith(".") || IGNORED_FILES.includes(file)) {
      return;
    }

    if (fs.lstatSync(__dirname + "/../" + directory + file).isDirectory()) {
      return addUrlsToCacheFromDirectory(file + "/")
    }

    URLS_TO_CACHE.push(directory + file);
  });

addUrlsToCacheFromDirectory();

if (blogConfig.measurementId) {
  URLS_TO_CACHE.push("https://www.googletagmanager.com/gtm.js?id=" + blogConfig.measurementId);
}

fs.writeFileSync(
  "sw.js",
  `
  const CACHE_NAME = 'markdown-blog-resources-v1';
  const URLS_TO_CACHE = ${JSON.stringify(URLS_TO_CACHE)};

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(URLS_TO_CACHE);
        })
    );
  });
  
  self.addEventListener('fetch', event => {
    if (!event.request.url.startsWith('http')) {
      return;
    }
  
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            });
  
        return cachedResponse || fetchPromise;
      })
    );
  }); 
`,
);
