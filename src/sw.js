const CACHE_NAME = 'my-pwa-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/bundle.js',
  '/manifest.json',
  '/icon.png'
]

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('打开缓存');
          return Promise.all(
            urlsToCache.map(url => {
              return fetch(url)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(`请求 ${url} 失败，状态码：${response.status}`);
                  }
                  return cache.put(url, response);
                })
                .catch(error => {
                  console.error(`缓存 ${url} 失败：`, error);
                });
            })
          );
        })
        .then(() => self.skipWaiting())
    );
  });

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 缓存中有匹配
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
