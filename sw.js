
  const CACHE_NAME = 'markdown-blog-resources-v1';
  const URLS_TO_CACHE = ["app.webmanifest","blog.articles.js","blog.config.js","images/056082a8-597c-4b19-8fae-13212e191aa0.jpg","images/1376e3c2-8eab-4b22-9259-3124cb8aea91.jpg","images/1404828f-708f-47ff-b3ea-70bad2a33e04.jpg","images/15a6ea90-b41a-47dd-b746-fea9e27cab5d.jpg","images/1b7e98bd-60ed-403c-a676-8b830de84ab5.jpg","images/23987dbf-6d85-47a0-9131-a868d8d7b16f.jpg","images/24556c5c-3529-4fbe-97e7-cdc8fdd8b2ca.jpg","images/2a77c03f-28a3-40c3-8275-b2deb293ed8a.jpg","images/2c25144f-0366-446b-91c3-aeeaca1986b4.jpg","images/2c6af58d-66d2-4594-8c55-8900f6c84c92.jpg","images/3060c8fe-7612-4d68-ab72-09104e0fc8fb.jpg","images/46a19946-c5ea-4d91-9ba5-a4bd01900b8c.jpg","images/57011527-d48e-4044-893d-21c2bec004cb.jpg","images/58af9c9e-6259-49fd-88a5-67534c6330ad.jpg","images/5c3cfbad-8a06-451f-9348-d4ac2acc6292.jpg","images/5c9c1c7f-1cab-426c-a8a6-67b2aa8ae988.jpg","images/60dcb388-9b6c-4929-bd9b-1e51c57a87e3.jpg","images/69a7646c-443c-4aa2-8cff-a831f473f9b4.jpg","images/70b41135-fe6f-4b9c-9f07-90b30779fd6f.jpg","images/8f80eb5f-c676-4c3f-beb7-5fdc282ddae1.jpg","images/9bf1b2c8-2f6e-4f5a-9661-38802a9818b2.jpg","images/a45b3ef3-8055-4805-be4a-a0f0d56ba667.jpg","images/a810582d-458a-4f3d-bfb6-34db5a96d1bc.jpg","images/aca93dea-5a8e-4183-9e82-5cb66b20a3fb.jpg","images/b166024d-1ad4-41bd-8019-2e53107e164e.jpg","images/eb507281-9971-4580-a3ac-e027785eeca4.jpg","images/f7d044bd-49fa-43ed-8927-db9127b9b35a.jpg","images/favicon-16x16.png","images/favicon-32x32.png","images/icon-512.png","images/screenshot.jpg","index.html","index.js","robots.txt","sitemap.xml","styles/github-markdown.min.css","styles/style.min.css","sw-register.js","sw.js"];

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
