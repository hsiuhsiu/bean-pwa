const CACHE_NAME = 'my-pwa-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/bundle.js',
  '/manifest.json',
  '/favicon.ico'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('打开缓存')
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(
                    `请求 ${url} 失败，状态码：${response.status}`
                  )
                }
                return cache.put(url, response)
              })
              .catch(error => {
                console.error(`缓存 ${url} 失败：`, error)
              })
          })
        )
      })
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Optionally, cache the new response
        const responseClone = response.clone()
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone)
        })
        return response
      })
      .catch(() => {
        return caches.match(event.request)
      })
  )
})
