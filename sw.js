self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("snake-cache").then(cache => {
      return cache.addAll([
        "snake.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
