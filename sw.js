
  const CACHE_NAME = 'markdown-blog-resources-v1';
  const URLS_TO_CACHE = ["app.webmanifest","blog.articles.js","blog.config.js","images/favicon-16x16.png","images/favicon-32x32.png","images/icon-512.png","images/screenshot.jpg","index.html","index.js","robots.txt","sitemap.xml","styles/github-markdown.min.css","styles/style.min.css","sw-register.js","sw.js"];

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
