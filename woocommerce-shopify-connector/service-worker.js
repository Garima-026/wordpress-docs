// Tombstone for the Workbox service worker shipped before v4.0.0.
// It precached the previous documentation build, so returning visitors could be
// served stale pages (and stale CSS) no matter what we deploy. Unregister and
// drop every cache, then reload any client still driving the old bundle.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((c) => c.navigate(c.url))
    })()
  )
})
